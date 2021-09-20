import Vue from 'vue';
import SimpleComponentClickHandler from '../simpleComponentClickHandler';

export default ({ store, app: { $whppt } }, menuIsInState, MENUSTATES, definition) => {
  Vue.directive(definition.name, {
    bind(el, binding) {
      const property = el.getAttribute('data-property');
      const label = el.getAttribute('label');
      const value = { value: binding.value };

      if (property) value.property = property;
      if (label) value.label = label;

      el.whppthandler = SimpleComponentClickHandler({
        store,
        menuIsInState,
        MENUSTATES,
        name: definition.componentName || definition.name,
        el,
        value,
      });
      el.addEventListener('click', el.whppthandler);
      el.addEventListener('mouseover', function (e) {
        if (!menuIsInState(store, MENUSTATES.SELECT)) return;
        $whppt.mouseoverComponent(el);
      });
      el.addEventListener('mouseout', function (e) {
        $whppt.mouseoutComponent(el);
      });
    },
    unbind(el) {
      el.removeEventListener('click', el.whppthandler);
      delete el.whppthandler;
    },
    update(el, binding) {
      el.removeEventListener('click', el.whppthandler);
      const property = el.getAttribute('data-property');
      const label = el.getAttribute('label');
      const value = { value: binding.value };

      if (property) value.property = property;
      if (label) value.label = label;

      el.whppthandler = SimpleComponentClickHandler({
        store,
        menuIsInState,
        MENUSTATES,
        name: definition.componentName || definition.name,
        el,
        value,
      });
      el.addEventListener('click', el.whppthandler);
    },
  });
};
