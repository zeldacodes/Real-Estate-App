class Listing{
    constructor(name, link, listingList) {
        this.name = name;
        this.link = link;
        this.listingList = listingList;
    }
    render() {
        const li = document.createElement("li");

        const removeButton = document.createElement("button");
        removeButton.innerText = "-";
        removeButton.addEventListener("click", (e) => {
            this.listingList.removeListing(this);
            renderApp();
        });
    li.append(removeButton);

    const a = document.createElement("a");
    a.innerText = this.name;
    a.href = this.link;
    li.append(a);
    
    return li;
    }
} 

class ListingList{
    constructor(listings){
        this.listings = listings;
    }
    addListing(listing){
        this.listings.push(listing);
    }
    removeListing(listing){
        const idx = this.listings.indexOf(listing);
        if (idx !== -1) this.listings.splice(idx, 1);
    }
    
    render() {
    // All the individual Listings need to render
    const ul = document.createElement("ul");
    const renderedListings = this.listings.map((listing) =>
        listing.render()
    );
    ul.replaceChildren( ...renderedListings);
    return ul;
    }
}

const listings = new ListingList([]);
const addButton = document.querySelector(".addButton");
addButton.addEventListener("click", addListing);

const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const sortButton = document.querySelector(".sortButton");

// Search through the names of the listings
searchButton.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const searchFn = (b) => b.name.toLowerCase().includes(query);
  listing.filterVisibleListings(searchFn);
});

searchButton.addEventListener("click", (e) => renderAllListings(searchListings(listingList)))
sortButton.addEventListener("click", (e) => renderAllListings(sortListings(listingList)))

const sortListings = (listings) => {
    return listings.sort((a, b) => a.name < b.name ? -1 : 1);
}



renderApp();

function addListing() {
    const name = document.querySelector(".name").value;
    const link = document.querySelector(".link").value;
  
    //When I click the add button, I want it to add the listing to the listing list and then, rerender after this happens.
    const listing = new Listing(name, link, listings);
    listings.addListing(listing);

    renderApp();
}

function renderApp() {
    const main = document.querySelector("main");
    const renderedListings = listings.render();
    main.replaceChildren(renderedListings);
  }