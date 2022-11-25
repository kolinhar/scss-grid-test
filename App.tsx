import * as React from 'react';

import './_grid.scss';
import './_flex.scss';
import './style.scss';

export default function App() {
  return (
    <article>
      <h1>POC pour UX CSS Layout Grid</h1>
      <main>
        <article>
          <h2>exemple 1</h2>
          <section
            className="grid-fluid"
            style={{
              maxWidth: '800px',
              // height: '600px',
            }}
          >
            <header className="grid rows-2-header cols-7">
              <div className="elt width-full">
                <p className="txt-center">Le joli header sepro</p>
              </div>
              <div className="elt width-2 sm-width-4 txt-center">
                selectionner un programme
              </div>
              <div className="elt width-3 txt-center sm-hide">espace vide</div>
              <div className="elt width-2 sm-width-3 left-5 sm-left-0 txt-center">
                manuel
              </div>
            </header>

            <section className="grid content rows-5-content cols-10">
              <div className="width-full height-full flex">
                <div className="elt flex-1 min-width-150">
                  Je suis flexbox 1
                </div>
                <div className="elt flex-1 min-width-150">
                  Je suis flexbox 2
                </div>
                <div className="elt flex-1 min-width-150">
                  Je suis flexbox 3
                </div>
              </div>
            </section>

            <footer className="grid rows-1-footer cols-7">
              <div className="elt width-2 sm-width-3">autorité de controle</div>
              <div className="elt sm-hide">vide</div>
              <div className="elt width-4 left-3 sm-left-0 txt-center">KV</div>
            </footer>
          </section>
        </article>

        <hr />

        <article>
          <h2>exemple 2</h2>
          <section
            className="grid-fluid"
            style={{
              maxWidth: '800px',
              // height: '600px',
            }}
          >
            <header className="grid rows-2-header cols-7">
              <div className="elt width-full">
                <p className="txt-center">Le joli header sepro</p>
              </div>
              <div className="elt width-2 sm-width-4 txt-center">
                selectionner un programme
              </div>
              <div className="elt width-3 txt-center sm-hide">espace vide</div>
              <div className="elt width-2 sm-width-3 left-5 txt-center">
                manuel
              </div>
            </header>

            <section className="grid content rows-5-content cols-10">
              <div className="elt width-5 sm-width-10 height-6 sm-height-3 flex">
                <div className="elt flex-1 min-width-75">Je suis flexbox 1</div>
                <div className="elt flex-1 min-width-75">Je suis flexbox 2</div>
                <div className="elt flex-1 min-width-75">Je suis flexbox 3</div>
              </div>
              <div className="elt width-5 sm-width-10 height-6 sm-height-3 flex">
                <div className="elt flex-1 min-width-75">Je suis flexbox 4</div>
                <div className="elt flex-1 min-width-75">Je suis flexbox 5</div>
                <div className="elt flex-1 min-width-75">Je suis flexbox 6</div>
              </div>
            </section>

            <footer className="grid rows-1-footer cols-7">
              <div className="elt width-2 sm-width-3">autorité de controle</div>
              <div className="elt sm-hide">vide</div>
              <div className="elt width-4 left-3 sm-left-0 txt-center">KV</div>
            </footer>
          </section>
        </article>
      </main>
    </article>
  );
}
