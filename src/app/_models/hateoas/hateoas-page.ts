import {HateoasPageContent} from './hateoas-page-content';
import {HateoasLinks} from './hateoas-links';

export class HateoasPage<E> {
  _embedded: HateoasPageContent<E>;
  _links: HateoasLinks;
}
