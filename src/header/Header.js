import React, {Component} from 'react';
import Card from '../card/Card';
import Tabs from '../tabs/Tabs';

class Header extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">{this.props.currentEvent.name}</span>
          </div>

          <Tabs schedules={this.props.currentEvent.schedules} />
        </header>

        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">{this.props.currentEvent.name}</span>
          <nav className="mdl-navigation">
            <span className="mdl-layout-title">Outros eventos:</span>
            {this.props.events.map((event, index) => {
              return (
                <a className="mdl-navigation__link" href="">{event.name}</a>
              )
            })}
          </nav>
        </div>

        <main className="mdl-layout__content">
          {this.props.currentEvent.schedules.map((schedule, index) => {
            return (
              <section key={index} className={"mdl-layout__tab-panel " + (index === 0 ? 'is-active' : '')} id={"scroll-tab-"+index}>
                <div className="page-content">
                  {schedule.areas.map((area, index) => {
                    return <Card  key={index} schedule={schedule} area={area} />
                  })}
                </div>
              </section>
            )
          })}
        </main>
      </div>
    );
  }
}

export default Header;
