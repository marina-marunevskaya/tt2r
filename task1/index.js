const className = 'red';
const id = 'name';

const element = document.getElementById(id);

if (element) {
    element.addEventListener('input', function ({ target: { value }}) {
        if (this.defaultValue === value) {
            this.classList.remove(className);
        } else {
            this.classList.add(className);
        }
    });
}
