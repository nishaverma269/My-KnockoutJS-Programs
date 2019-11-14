
    // Here's my data model
var ViewModel = function(first, last) {
    this.txtValue = ko.observable(first);
    this.lastName = ko.observable(last);
 
    this.fullName = ko.pureComputed(function() {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return this.txtValue() + " " + this.lastName();
    }, this);
};
 
ko.applyBindings(new ViewModel("", ""), document.getElementById('everything')); // This makes Knockout get to work