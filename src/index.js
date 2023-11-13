function viewModel() {
    this.isActive = ko.observable(false);
    this.isInputFocused = ko.observable(false);
    this.inputVal = ko.observable('');
    this.isSubmitAllowed = ko.observable(false);

    this.onClick = function(viewModel, event) {
        this.isActive(!this.isActive());
        if(!this.isActive()) {
            this.inputVal('Hi again');
            return this;
        } else this.isInputFocused(!this.isInputFocused());
    
    }  
}
const model = new viewModel(); 
ko.applyBindings(model);
window.model = model;



