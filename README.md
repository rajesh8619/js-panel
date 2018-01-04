This is a simple expand collapse panel created using only javascript.

you have to include the panel.js file in the html 

To create collapse/panel, Create a div with class "panel-container". This is the outer container which contains all the panels. you can create "N" number of "panel-containers" in a page.

Inside the "panel-container" div, you can create any number of panels. To create the panels, create a div with class "panel". Inside the panel div, you can create the panel heading and panel body content by using the classes "panel-head" and "panel-body" to separate div. 

For example;

 <div class="panel-container">
        <div class="panel">
            <div class="panel-head">Heading 1</div>
            <div class="panel-body">Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will
                later be filled with 'real' content. This is required when, for example, the final text is not yet available.
                Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics
                when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been
                in use by typesetters since the 16th century.
            </div>
        </div>
        <div class="panel">
            <div class="panel-head">Heading 2</div>
            <div class="panel-body">Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the
                content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability
                is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.
                If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral
                judgement on the visual impact and readability of the typefaces (typography), or the distribution of text
                on the page (layout or type area). For this reason, dummy text usually consists of a more or less random
                series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression
                and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text
                is relatively realistic so that the layout impression of the final publication is not compromised.
            </div>
        </div>
    </div>
     <script src="panels.js" /></script>
