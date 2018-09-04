const coin = {
    state: 0,
    flip: function () {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        this.state = Math.floor(Math.random() * 2);
    },
    toString: function () {
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        if (this.state === 0) {
            return "H"
        };
        if (this.state === 1) {
            return "T"
        };
    },
    toHTML: function () {
        const image = document.createElement('img');
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        if (this.state === 0) {
            image.src = "heads.jpg"
        };
        if (this.state === 1) {
            image.src = "tails.jpg"
        };
        return image;
    }
};

const outputArray = [];
//count for coin tosses
for (let i = 0; i < 20; i++) {
    coin.flip();
    outputArray.push(coin.toString());
//outputs coin image to html page
    document.getElementById("images").appendChild(coin.toHTML());
}
//outputs "H", "T" to the html page
document.getElementById("text").innerHTML = outputArray.join(", ");