export class Croquete {
    constructor({_id = undefined, restaurant, author, comment}) {
        this._id = _id;
        this.restaurant = restaurant;
        this.author = author;
        this.comment = comment;
    }
}