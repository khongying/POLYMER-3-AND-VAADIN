import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';

/**
 * `polymer3-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Polymer3Index extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <vaadin-text-field id="fname" label="First Name"></vaadin-text-field>
      <vaadin-text-field id="lname" label="Last Name"></vaadin-text-field>
      <vaadin-date-picker id="date" label="Pick a date"></vaadin-date-picker>
      <vaadin-button on-click="_addData">ADD</vaadin-button>
      <br/>
      <vaadin-grid aria-label="Basic Binding Example" items="[[data]]">
        <vaadin-grid-column width="60px" flex-grow="0">
          <template class="header">#</template>
          <template>[[_count(index)]]</template>
        </vaadin-grid-column>
      
        <vaadin-grid-column>
          <template class="header">First Name</template>
          <template>[[item.fname]]</template>
        </vaadin-grid-column>
      
        <vaadin-grid-column>
          <template class="header">Last Name</template>
          <template>[[item.lname]]</template>
        </vaadin-grid-column>
      
        <vaadin-grid-column>
          <template class="header">Date</template>
          <template>[[item.date]]</template>
        </vaadin-grid-column>
      
        <vaadin-grid-column>
          <template class="header">Action</template>
          <template>
            <vaadin-button on-click="_addDel">DELETE</vaadin-button>
          </template>
        </vaadin-grid-column>
      </vaadin-grid>

    `;
  }
  static get properties() {
    return {
      data: {
        type: Array,
        value: [],
      },
    }
  }

  _count(index) {
    return ++index
  }

  _addData() {
    this.push('data', { fname: this.$.fname.value, lname: this.$.lname.value, date: this.$.date.value })
    console.log(this.data);

  }

}

window.customElements.define('polymer3-index', Polymer3Index);
