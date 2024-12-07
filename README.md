# Eventya Devs Documentation

### Installation

```bash
```

### Running the project

```bash
bundle exec jekyll serve
```

Visit [http://localhost:4000](http://localhost:4000)

### Contributing

Inserting code blocks in markdown files is a common task. This is a simple way to do it.

```html
<!-- Code Block -->
<pre id="code-block" class="overflow-x-auto text-sm">
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
        &lt;head&gt;
          &lt;title&gt;MyRailsApp&lt;/title&gt;
          &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
          &lt;%= csrf_meta_tags %&gt;
          &lt;%= csp_meta_tag %&gt;

          &lt;%= stylesheet_link_tag &#39;application&#39;, media: &#39;all&#39;, &#39;data-turbolinks-track&#39;: &#39;reload&#39; %&gt;
          &lt;%= javascript_pack_tag &#39;application&#39;, &#39;data-turbolinks-track&#39;: &#39;reload&#39; %&gt;
        &lt;/head&gt;
        &lt;body class=&quot;bg-gray-100 font-sans leading-normal tracking-normal&quot;&gt;

          &lt;nav class=&quot;bg-gray-800 p-4&quot;&gt;
            &lt;div class=&quot;container mx-auto&quot;&gt;
              &lt;div class=&quot;flex items-center justify-between&quot;&gt;
                &lt;div class=&quot;text-white text-lg font-bold&quot;&gt;
                  MyRailsApp
                &lt;/div&gt;
                &lt;div&gt;
                  &lt;%= link_to &#39;Home&#39;, root_path, class: &#39;text-white px-4&#39; %&gt;
                  &lt;%= link_to &#39;About&#39;, about_path, class: &#39;text-white px-4&#39; %&gt;
                  &lt;%= link_to &#39;Contact&#39;, contact_path, class: &#39;text-white px-4&#39; %&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/nav&gt;

          &lt;div class=&quot;container mx-auto mt-8&quot;&gt;
            &lt;%= yield %&gt;
          &lt;/div&gt;

          &lt;footer class=&quot;bg-gray-800 p-4 mt-8&quot
            &lt;div class=&quot;container mx-auto text-center text-white&quot;&gt;
              &amp;copy; &lt;%= Time.now.year %&gt; MyRailsApp. All rights reserved.
            &lt;/div&gt;
        </code>
    </pre>
```
Important: Escape the HTML tags to prevent them from being rendered as HTML.
Use the ChatGPT to do this.

