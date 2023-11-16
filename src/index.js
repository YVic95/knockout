function viewModel() {
   
    this.collections = ko.observableArray([['item 1', ' item 2'], ['item1']]);
    
    this.onClick = function() {
        console.log('click');
    }
}
const model = new viewModel(); 
ko.applyBindings(model);
window.model = model;
