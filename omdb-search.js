class OmdbSearch extends HTMLElement {
    constructor() {
        super();
        var shadowRoot = this.attachShadow({ mode: 'open' });
        var style = document.createElement('style');
        style.textContent = this.getStyle()
        shadowRoot.appendChild(style);
        shadowRoot.innerHTML += `
        <p id="error-message" hidden>No records found</p>
        <ul class="result__list"></ul>
        `;

        this.previousRequestUrl = "";
    }
    getStyle() {
        const styles = `:host {
            display: block;
            box-sizing: border-box;
        }
        p.result__amount {
            padding: 0.5em;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1em;
            font-weight: 500;             
        }
        ul.result__list {
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
            list-style-type: none;            
        }
        
        img.result__poster {
            width: 100%;
            pointer-events: none;
        }
        
        li.result__list-item {
            will-change: width;
            transition: width ease 0.2s;
            margin: 0.5em;            
        }
        
        a.result__link {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;            
        }

        a.result__link:focus, a.result__link:active {
            color: #0366bb;
        }
        
        h4.result__heading {
            flex: 1;
            margin: 0.5em;
            font-size: 1em;
            pointer-events: none;            
        }
        
        p.result__text--key {
            margin-block-start: 0.5em;
            margin-block-end: 0.5em;           
        }
        
        span.result__text--value {            
        }
        
        /* Phones--small */            
        @media only screen and (min-width: 320px) {
            li.result__list-item {
                width: 100%;
                height: auto;
                border: 1px solid #eee;
                font-family: Arial, Helvetica, sans-serif;
                color: black;
            }
            img.result__poster {
                flex: 1;
                max-width: 128px;
                margin: 0 auto;                
            }
            a.result__link {
                flex-direction: row;
            }
        }
        
        /* Phones--large */            
        @media only screen and (min-width: 425px) {
            li.result__list-item {
                float: left;
                width: 48%;
                height: 380px;
                margin-top: 0.5em;
                margin-right: 0.25%;
                margin-bottom: 0.5em;
                margin-left: 0;
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-direction: column;
            }
            img.result__poster {
                width: auto;
                max-width: 100%;
                max-height: 192px;
            }
            a.result__link {
                flex-direction: column;
            }
        }
        
        /* Tablet--portrait */            
        @media only screen and (min-width: 768px) {
            li.result__list-item {
                width: 32%;
            }
        }
        
        /* Tablet--landscape */            
        @media only screen and (min-width: 992px) {
            li.result__list-item {
                width: 24%;
            }
        }
        
        /* Large Devices, Wide Screens */            
        @media only screen and (min-width: 1200px) {
            li.result__list-item {
                width: 19%;
            }
        }`;
        return styles;
    }
    async attributeChangedCallback(name, oldValue, newValue) {

        const requestUrl = this._computeUrl(name, newValue);
        if (requestUrl === this.previousRequestUrl) {
            return;
        } else {
            this.previousRequestUrl = requestUrl;
            this.shadowRoot.querySelector(".result__list").innerHTML = "";

            const results = await this._fetchData(requestUrl);

            if (results.Error) {
                this.shadowRoot.querySelector("#error-message").hidden = false;
                return;
            }
            else {
                const set = new Set(results.Search.map(record => JSON.stringify(record)));
                this.shadowRoot.querySelector("#error-message").hidden = true;
                const uniqueEntries = [...set];
                // Poster: "https://m.media-amazon.com/images/M/MV5BMzc4YzhiN2ItY2Y4NC00YTA0LWEyMjEtNzllNTcxZDdjODhiXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
                // Title: "Pocahontas"
                // Type: "movie"
                // Year: "1995"
                // imdbID: "tt0114148"

                for (const entry of uniqueEntries) {
                    let item = JSON.parse(entry);

                    const image = document.createElement("img");
                    image.className = "result__poster";
                    image.src = this._computeImgSrc(item.Poster);
                    image.alt = item.Title;
                    image.onerror = (event) => this._handleError(event);

                    const anchor = document.createElement("a");
                    anchor.className = "result__link";
                    anchor.href = `#${item.imdbID}`;
                    anchor.innerHTML += "";

                    const listItem = document.createElement("li");
                    listItem.className = "result__list-item";
                    listItem.id = item.imdbID;
                    listItem.onclick = (event) => this._handleClick(event);

                    anchor.appendChild(image);
                    anchor.innerHTML += `
                        <h4 class="result__heading">${item.Title}</h4>
                    `;
                    listItem.appendChild(anchor);
                    listItem.innerHTML += `
                        <div style="padding: 8px;">
                        <p class="result__text--key">🗓
                            <span class="result__text--value">${item.Year}</span>
                        </p>
                        <button onclick="window.location.href = 'http://www.imdb.com/title/${item.imdbID}'" type="button">Learn More</button>                        
                        </div>
                    `
                    this.shadowRoot.querySelector(".result__list").appendChild(listItem);
                }
            }
        }
    }

    _fetchData(requestUrl) {
        return fetch(requestUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`An error occurred during the request. Status text: ${response.statusText}`);
                }
            }).catch(error => {
                console.error(error);
                return error;
            });
    }

    static get observedAttributes() {
        return ['q', 'type', 'year', 'page', 'api-version'];
    }

    get baseUrl() {
        return 'https://www.omdbapi.com';
    }

    get API_KEY() {
        return "d6a1e3ec";
    }

    get q() {
        return this.getAttribute("q");
    }

    get type() {
        return this.getAttribute("type");
    }

    get year() {
        return this.getAttribute("year");
    }

    get page() {
        return this.getAttribute("page");
    }

    get apiVersion() {
        return this.getAttribute("api-version");
    }

    get responseType() {
        return this.getAttribute("response-type");
    }

    _computeUrl(name, value) {
        const params = {
            baseUrl: this.baseUrl || "",
            q: this.q || "",
            type: this.type || "movie",
            year: this.year || "",
            page: this.page || "1",
            responseType: this.responseType || "json",
            apiVersion: this.apiVersion || "1",
            apiKey: this.API_KEY,
            [name]: value
        };

        return `${params.baseUrl}/?s=${params.q.replace(/^\s+|\s+$/g, '')}&type=${params.type}&y=${params.year}&page=${params.page}&r=${params.responseType}&v=${params.apiVersion}&apiKey=${params.apiKey}`;
    }

    _computeImgSrc(src) {
        return (src === 'N/A')
            ? "./images/omdb-search.png"
            : src;
    }

    _handleResponse() {
        var omdbSearch = omdbSearch || {};
        omdbSearch.omdbResponse = event.detail.response;
    }

    _handleClick(event) {
        console.debug(event.target)
    }

    _handleError(event) {
        event.target.src = '../images/omdb-search.png';
    }
}

window.customElements.define('omdb-search', OmdbSearch);