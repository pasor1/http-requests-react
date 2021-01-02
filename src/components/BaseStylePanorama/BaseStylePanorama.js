import React from 'react';

const baseStylePanorama = () => {
  return (
    <div>
      <header role="banner">
        <h1>Base Style Panorama</h1>
      </header>
      <main role="main" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Headers</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <h1>h1 - Heading 1</h1>
            <h2>h1 - Heading 2</h2>
            <h3>h1 - Heading 3</h3>
            <h4>h1 - Heading 4</h4>
            <h5>h1 - Heading 5</h5>
            <h6>h1 - Heading 6</h6>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Paragraphs</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <p>A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a self-contained unit
            of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more
            sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of
            formal writing, used to organize longer prose.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel lectus ligula.
            Donec congue nec nisi non ultricies.Praesent ullamcorper et felis non accumsan.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Pellentesque porttitor sagittis mi, sed tristique purus ultrices et.
            Integer ut maximus ante, vel rhoncus mi. Sed ornare pulvinar lobortis.
            Vestibulum sodales suscipit enim, quis convallis elit rhoncus malesuada.
            Cras at mollis ipsum. Aliquam risus purus, placerat nec justo et, pharetra placerat sem.</p>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Common Inline elements</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <p><a href="#!">This is a text link</a>.</p>
            <p><strong>Strong</strong> is used to indicate <strong>strong</strong> importance.</p>
            <p>This text has added <em>emphasis</em>.</p>
            <p><b>b element</b> is stylistically different text from normal text, without any special importance.</p>
            <p><i>i element</i> is text that is offset from the normal text.</p>
            <p><u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation.</p>
            <p>This <small>small text is small</small> for for fine print, etc.</p>
            <p>This text is <del>deleted</del> and This text is <ins>inserted</ins>.</p>
            <p>This text has a <s>strikethrough</s>.</p>
          </div>
        </div>

        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Other Inline elements</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <p>Superscript<sup>®</sup>.</p>
            <p>Subscript for things like H<sub>2</sub>O.</p>
            <p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>
            <p><q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline quotation.</q></p>
            <p><cite>This is a citation.</cite></p>
            <p><dfn>Dfn element</dfn> indicates a definition.</p>
            <p><mark>Mark element</mark> indicates a highlight.</p>
            <p><var>Variable element</var>, such as <var>x</var> = <var>y</var>.</p>
            <p>Time element: <time dateTime="2021-01-01T00:00+00:00">First day of the year</time></p>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Unordered Lists</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <ul>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Ordered Lists</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <ol>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>List Item 3</li>
              <li>List Item 4</li>
              <li>List Item 5</li>
            </ol>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Definition lists</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <dl>
              <dt>Definition title</dt>
              <dd>Definition description text</dd>
              <dt>Definition title</dt>
              <dd>Definition description text</dd>
              <dt>Definition title</dt>
              <dd>Definition description text</dd>
              <dt>Definition title</dt>
              <dd>Definition description text</dd>
            </dl>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Tables</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <table>
              <caption>Table Caption</caption>
              <thead>
                <tr>
                  <th>Table Heading 1</th>
                  <th>Table Heading 2</th>
                  <th>Table Heading 3</th>
                  <th>Table Heading 4</th>
                  <th>Table Heading 5</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Table Footer 1</th>
                  <th>Table Footer 2</th>
                  <th>Table Footer 3</th>
                  <th>Table Footer 4</th>
                  <th>Table Footer 5</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Table Cell 1</td>
                  <td>Table Cell 2</td>
                  <td>Table Cell 3</td>
                  <td>Table Cell 4</td>
                  <td>Table Cell 5</td>
                </tr>
                <tr>
                  <td>Table Cell 1</td>
                  <td>Table Cell 2</td>
                  <td>Table Cell 3</td>
                  <td>Table Cell 4</td>
                  <td>Table Cell 5</td>
                </tr>
                <tr>
                  <td>Table Cell 1</td>
                  <td>Table Cell 2</td>
                  <td>Table Cell 3</td>
                  <td>Table Cell 4</td>
                  <td>Table Cell 5</td>
                </tr>
                <tr>
                  <td>Table Cell 1</td>
                  <td>Table Cell 2</td>
                  <td>Table Cell 3</td>
                  <td>Table Cell 4</td>
                  <td>Table Cell 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Blockquotes</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <blockquote>
              <p>A block quotation (also known as a long quotation or extract) is a quotation in a written document,
                that is set off from the main text as a paragraph, or block of text.</p>
              <p>It is typically distinguished visually using indentation and a different typeface or smaller size
                quotation. It may or may not include a citation, usually placed at the bottom.</p>
              <cite><a href="#!">Said no one, ever.</a></cite>
            </blockquote>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Code</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <p>Keyboard input: <kbd>Cmd</kbd></p>
            <p>Inline code: <code>&lt;div&gt;code&lt;/div&gt;</code></p>
            <p>Sample output: <samp>This is sample output from a computer program.</samp></p>
          </div>
        </div>



        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Images</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <img src="https://via.placeholder.com/300" alt="alt text img1" />
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Figures</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <figure>
              <img src="https://via.placeholder.com/300" alt="alt text img2" />
              <figcaption>Here is a caption for this image.</figcaption>
            </figure>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Embedded Audio & Video</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <audio controls>audio</audio>
            <video controls>video</video>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Bars & Rules</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <p>Horizontal rules</p>
            <hr />
            <p>
              Meter indicators
              <meter value="6" min="0" max="10">2 out of 10</meter>
            </p>
            <p>
              Progress bars
              <progress>progress</progress>
            </p>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Input fields</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <p>
              <label htmlFor="input_text">Text Input</label>
              <input id="input_text" type="text" placeholder="Text Input" />
            </p>
            <p>
              <label htmlFor="input_password">Password</label>
              <input id="input_password" type="password" placeholder="Type your Password" />
            </p>
            <p>
              <label htmlFor="input_webaddress">Web Address</label>
              <input id="input_webaddress" type="url" placeholder="http://yoursite.com" />
            </p>
            <p>
              <label htmlFor="input_emailaddress">Email Address</label>
              <input id="input_emailaddress" type="email" placeholder="name@email.com" />
            </p>
            <p>
              <label htmlFor="input_phone">Phone Number</label>
              <input id="input_phone" type="tel" placeholder="(999) 999-9999" />
            </p>
            <p>
              <label htmlFor="input_search">Search</label>
              <input id="input_search" type="search" placeholder="Enter Search Term" />
            </p>
            <p>
              <label htmlFor="input_text2">Number Input</label>
              <input id="input_text2" type="number" placeholder="Enter a Number" />
            </p>
            <p>
              <label htmlFor="input_text3" className="error">Error</label>
              <input id="input_text3" className="is-error" type="text" placeholder="Text Input" />
            </p>
            <p>
              <label htmlFor="input_text4" className="valid">Valid</label>
              <input id="input_text4" className="is-valid" type="text" placeholder="Text Input" />
            </p>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Input fields HTML5</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <p>
              <label htmlFor="ic">Color input</label>
              <input type="color" id="ic" />
            </p>
            <p>
              <label htmlFor="in">Number input</label>
              <input type="number" id="in" min="0" max="10" defaultValue="5" />
            </p>
            <p>
              <label htmlFor="ir">Range input</label>
              <input type="range" id="ir" defaultValue="10" />
            </p>
            <p>
              <label htmlFor="idd">Date input</label>
              <input type="date" id="idd" defaultValue="1970-01-01" />
            </p>
            <p>
              <label htmlFor="idm">Month input</label>
              <input type="month" id="idm" defaultValue="1970-01" />
            </p>
            <p>
              <label htmlFor="idw">Week input</label>
              <input type="week" id="idw" defaultValue="1970-W01" />
            </p>
            <p>
              <label htmlFor="idt">Datetime input</label>
              <input type="datetime" id="idt" defaultValue="1970-01-01T00:00:00Z" />
            </p>
            <p>
              <label htmlFor="idtl">Datetime-local input</label>
              <input type="datetime-local" id="idtl" defaultValue="1970-01-01T00:00" />
            </p>
          </div>
        </div>
        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Form elements</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <p>
              <label htmlFor="select">Select</label>
              <select id="select">
                <optgroup label="Option Group">
                  <option>Option One</option>
                  <option>Option Two</option>
                  <option>Option Three</option>
                </optgroup>
              </select>
            </p>
            <p>
              <label htmlFor="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" defaultChecked="checked" /> checkboxA</label>
              <label htmlFor="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox" /> checkboxB</label>
              <label htmlFor="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox" /> checkboxC</label>
            </p>
            <p>
              <label htmlFor="radio1"><input id="radio1" name="radio" type="radio" className="radio" defaultChecked="checked" />radioA</label>
              <label htmlFor="radio2"><input id="radio2" name="radio" type="radio" className="radio" /> radioB</label>
              <label htmlFor="radio3"><input id="radio3" name="radio" type="radio" className="radio" /> radioC</label>
            </p>
            <p>
              <label htmlFor="textarea">Textarea</label>
              <textarea id="textarea" rows="4" cols="48" placeholder="Enter your message here"></textarea>
            </p>
          </div>
        </div>

        <div style={{ width: '46%', margin: '10px' }}>
          <p style={{ margin: '10px 10px 0', color: '#555' }} id="text">Buttons</p>
          <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '10px' }}>
            <p>
              <input type="submit" defaultValue="input type=submit" />
              <input type="button" defaultValue="input type=button" />
              <input type="reset" defaultValue="input type=reset" />
              <input type="submit" defaultValue="input disabled" disabled />
            </p>
            <p>
              <button type="submit">&lt;button type=submit&gt;</button>
              <button type="button">&lt;button type=button&gt;</button>
              <button type="reset">&lt;button type=reset&gt;</button>
              <button type="button" disabled>&lt;button disabled&gt;</button>
            </p>
          </div>
        </div>
      </main>
      <footer role="contentinfo">
        <p>Made by <a href="https://github.com/pasor1">Pasor1</a> - <a href="https://github.com/pasor1/base-style-panorama-jsx">Github</a></p>
      </footer>
    </div>
  )
}

export default baseStylePanorama;
