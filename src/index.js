function viewModel() {
    ko.bindingHandlers.afterRender = {
        init: function(element, valueAccessor, allBindings, viewModel) {
            // This will be called when the binding is first applied to an element
            console.log('valueAccessor', valueAccessor);
            valueAccessor().apply(viewModel, [element,viewModel]);

        }
    };
    this.onElementRendered = function(element, viewModel) {
        console.log(element);
        console.log(viewModel);
    }  
}
const model = new viewModel(); 
ko.applyBindings(model);
window.model = model;



