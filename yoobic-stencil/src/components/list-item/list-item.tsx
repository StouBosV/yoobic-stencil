import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'list-item',
  styleUrl: 'list-item.css',
  shadow: true,
})
export class ListItem {
  @Prop() fruit: string;
  @Prop() color: string;

  render(): any {
    return (
      <div class="paragraph-wrapper">
        <div>
          <h2>Name:</h2>
          <p>{this.fruit}</p>
        </div>
        <div>
          <h2>Color:</h2>
          <p>{this.color}</p>
        </div>
      </div>
    );
  }

}
