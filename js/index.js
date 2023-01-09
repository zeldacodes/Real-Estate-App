// let allListings = [];

class Zellow {
    constructor(name, link, listingsList) {
      this.name = name;
      this.link = link;
      this.listingsList = listingsList;
    }
    render() {
      const li = document.createElement("li");
  
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "-";
      removeBtn.addEventListener("click", () => {
        this.bookmarkList.removeBookmark(this);
        renderApp();
      });
      li.append(removeBtn);
  
      const a = document.createElement("a");
      a.textContent = this.name;
      a.href = this.link;
      li.append(a);
  
      return li;
    }
  }

  class ListingsList {
    constructor(listings) {
        this.listings = listings;
    }

    addListing(listing)
        this.listings.push(listing);

    removeListing(listing) {
        const index = this.listings.indexOf(listing);
        if (index !== -1) this.listings.splice(index, 1);
    }

    render() {
        const ul = document.createElement("ul");
        const renderedListings = this.listings.map((listing) => 
            listing.render()
        );
        ul.replaceChildren(...renderedListings);
        return ul;
    }
  }

  const listings = new ListingsList([]);
  const addBtn = document.querySelector(".add-listing");
  addBtn.addEventListener("click", addListing);


  renderApp();

  // create and add a listing to an array

  function addListing() {
    const name = document.querySelector(".name").value;
    const link = document.querySelector(".link").value;

    const listing = new Listing(name, link, listings);
    listings.addListing(listing);

    renderApp();
  }

    function renderApp() {
        const main = document.querySelector("main");
        const renderedListings = listings.render();
        main.replaceChildren(renderedListings);
    }