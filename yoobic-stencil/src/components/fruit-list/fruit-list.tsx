import { Component, Prop, h, Watch } from '@stencil/core';
import { Fruits } from './fruits.model';

@Component({
  tag: 'fruit-list',
  styleUrl: 'fruit-list.css',
  shadow: true,
})
export class FruitList {
  private _fruitsData: Fruits[];
  @Prop() fruitsData: Fruits[] | string;
  @Watch('fruitsData')
    arrayDataWatcher(newValue: Fruits[] | string) {
      if (typeof newValue === 'string') {
        this._fruitsData = JSON.parse(newValue);
      }
      else {
        this._fruitsData = newValue;
      }
    }

    componentWillLoad() {
      this.arrayDataWatcher(this.fruitsData);
    }
  render() {
      return [
        this._fruitsData.map(f =>
          <div class='row'>
            <list-item fruit={f.name} color={f.color}></list-item>
          </div>
        )
      ];
  }
 }
