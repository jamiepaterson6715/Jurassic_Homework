const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.collection = [];
}

Park.prototype.ticketPrice = function (){
  return this.price;
}

  module.exports = Park
