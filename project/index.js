// Main javascript file for every page in the project. 

function collapseModule() {
    const moduleList = document.querySelector('.module-list');
    if (moduleList.style.display === 'none') {
        moduleList.style.display = 'block';
    } else {
        moduleList.style.display = 'none';
    }
}

