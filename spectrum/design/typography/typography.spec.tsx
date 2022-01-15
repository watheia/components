import { renderTemplate } from '@teambit/html.modules.render-template';
import { Typography } from './index';

it('should render with the correct text', () => {
  const testString = 'Adobe Clean';
  const element = Typography({});
  const body = document.body;
  renderTemplate(body, element);
  const renderedElement = [...document.getElementsByTagName('div')].find((el) =>
    el.textContent.includes(testString)
  );
  expect(renderedElement).toBeTruthy();
});
