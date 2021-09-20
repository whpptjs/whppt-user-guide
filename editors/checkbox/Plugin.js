import CheckboxEditor from './Editor';
import CheckboxDirective from './Directive';

export default {
  name: 'Checkbox',
  editors: [
    {
      name: 'checkbox',
      label: 'Checkbox',
      directive: CheckboxDirective,
      component: CheckboxEditor,
    },
  ],
};
