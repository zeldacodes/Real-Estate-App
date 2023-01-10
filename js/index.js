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
        removeButton.addEventListener("click", () => {
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
const addButton = document.querySelector(".add-listing");
addButton.addEventListener("click", addListing);

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