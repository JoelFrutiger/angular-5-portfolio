
import { SubProject } from './subProject';
import { Tag } from './tag';


export class GeneralProject implements SubProject {

  constructor(public desc, public url = '') { }

}
