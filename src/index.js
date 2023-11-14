function viewModel() {
   this.firstName = ko.observable('');
   this.lastName = ko.observable('');
   this.cardHolderName = ko.observable('');
   
   // Use pureComputed() when computed observable simply calculates 
   // and returns a value based on some observable dependencies

   this.customerName = ko.computed(function() {
    const fullName = `${this.firstName()} ${this.lastName()}`;
    this.cardHolderName(fullName.toUpperCase());
    return fullName;
    //return this.firstName() + " " + this.lastName();
    
   }, this); 
}
const model = new viewModel(); 
ko.applyBindings(model);
window.model = model;



