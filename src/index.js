const myModel = {
    param: ko.observable('') 
};

function viewModel1() {
    this.param = myModel.param;
}

function viewModel2() {
    this.param = myModel.param;

    this.search = function() {
        console.log('search', this.param());
    };
}
const model1 = new viewModel1(); 
const model2 = new viewModel2(); 
ko.applyBindings(model1, scope1);
ko.applyBindings(model2, scope2);
window.model1 = model1;
