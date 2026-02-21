// Main javascript file for every page in the project.

function collapseModule(button) {
    const module = button ? button.closest('.module') : document.querySelector('.module');
    const moduleList = module ? module.querySelector('.module-list') : null;
    if (!moduleList) {
        return;
    }

    moduleList.style.display = moduleList.style.display === 'none' ? 'block' : 'none';
}

window.collapseModule = collapseModule;

