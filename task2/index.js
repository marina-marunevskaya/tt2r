function selectItem(items, selectProperty, value) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].value === value) {
            items[i][selectProperty] = true;
            break;
        }
    }
}

function gatherItems(items, gatherProperty, key) {
    let gatheredItems = [];

    items.forEach(
        item => {
            if (item[gatherProperty]) {
                gatheredItems.push({
                    key: item.name || key,
                    value: item.value
                });
            }
        }
    );

    return gatheredItems;
}

const cleanURL = location.href.replace(location.search, '');

const sizeInputs = document.getElementsByName('size');
const colorInputs = document.getElementsByName('color');
const manufacturerInput = document.getElementById('manufacturerInput');
const manufacturerOptions = document.querySelectorAll('#manufacturerInput option');
const saleInput = document.getElementById('saleInput');

parseSearchString(location.search).forEach(
    filter => {
        switch (filter.key) {
            case 'size':
                selectItem(sizeInputs, 'checked', filter.value);
                break;
            case 'color':
                selectItem(colorInputs, 'checked', filter.value);
                break;
            case 'manufacturer':
                selectItem(manufacturerOptions, 'selected', filter.value);
                break;
            case 'sale':
                if (saleInput) {
                    saleInput.checked = true;
                }
                break;
            default:
                break;
        }
    }
);

function buildSearchURL () {
    let filters = [
        ...gatherItems(sizeInputs, 'checked'),
        ...gatherItems(colorInputs, 'checked'),
        ...gatherItems(manufacturerOptions, 'selected', 'manufacturer')
    ];

    if (saleInput && saleInput.checked) {
        filters.push({
            key: saleInput.name,
            value: saleInput.value
        });
    }

    const searchString = buildSearchString(filters);

    console.log(`${cleanURL}${ searchString ? `?${searchString}` : ''}`)
}

sizeInputs.forEach(
    input => input.addEventListener('change', buildSearchURL)
);

colorInputs.forEach(
    input => input.addEventListener('change', buildSearchURL)
);

if (manufacturerInput) {
    manufacturerInput.addEventListener('change', buildSearchURL);
}
