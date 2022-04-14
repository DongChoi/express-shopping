"use strict";

const { NotFoundError } = require("./expressError");

class Item {
    static items = [
        {
            "name": "Spinner",
            "price": "1000"
        },
        {
            "name": "Spinner",
            "price": "1000"
        },
        {
            "name": "Santa Claus Doll",
            "price": "1000"
        },
        {
            "name": "chocolate Milk",
            "price": "1000"
        },
        {
            "name": "Skinner",
            "price": "1000"
        },
        {
            "name": "Slimmer",
            "price": "1000"
        }
    ];
    static _get(name) {
        const itemIndex = Item.items.filter((item)=>{
            return item.name === name
        });

        return Item.items[itemIndex]
    }; //called by other static methods gets a speicfic item
    static add(name, price) {
        console.log("adding item to shopping list")
        Item.items.push({ name, price })
        let newItem = Item.items[Item.items.length-1]
        return { "added": newItem };
    };
    static all() {
        return Item.items;
    };
    static get(name) {
        return Item._get(name);
    }; //just calls _get
    static delete(name) {
        const itemIndex = indexOf(Item._get(name));
        Item.items.splice(itemIndex, 1);

    };
}


module.exports = { Item };

// item should look like json(item =items ** [{name : toy, price : $1000}])