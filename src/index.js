function viewModel() {
    this.primitiveData = ko.observable('Default string');
    this.dataArray = ko.observableArray(['item 1', 'item 2']);
    const data = {a: 1, b: 2};
    this.dataObject = ko.observable(data);

    this.primitiveData.subscribe(value => console.log('string', value));
    this.dataArray.subscribe(value => console.log('array', value));
    this.dataObject.subscribe(value => console.log('object', value));

    console.group('Default values');
    console.log(this.primitiveData());
    console.log(this.dataArray());
    console.log(this.dataObject());
    console.groupEnd();

    this.onUpdate = function() {
        this.primitiveData('Updated string');
        this.dataArray.push('item 3');
        this.dataObject({...data, c: ++data.b});
    }
}
const model = new viewModel(); 
ko.applyBindings(model);
window.model = model;



