myapp.factory("kartService", function() {
   
    var kart = [];
    return {
        getkart: function(books) {
            
            return kart;
        },

        addtokart: function(books) {
            kart.push(books);
        },
        buy: function(books) {
            alert("thank you for buying");
        }


    }
});
