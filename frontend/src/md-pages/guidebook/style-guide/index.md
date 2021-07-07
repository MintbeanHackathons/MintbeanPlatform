# Style Guide

The purpose of this page is to help our collaborators to generate content following our design guideline.

<figure>
  <img src="../../../assets/logo.png">
</figure>

## Brand Guiding Statements
#### Mission
*Mintbean is a talent incubator helping software developers get access to employers faster. We work to accelerate the careers, skillsets, and professional networks of software developers globally.*
##### Tone
Bright, fun, welcoming, spacious
##### Voice
Conversational, motivational

## Typography
Default typography properties for the default light-mode design.
* `h1`, `h2`
  - "Arial Black", Gadget, sans-serif, *Mintbean NeutralDark*
* `h3`, `h4`, `h5`
  - "Arial Black", Gadget, sans-serif, *Mintbean NeutralMed*
* `p`, `a`
  - Arial, Helvetica, sans-serif, *Mintbean NeutralMed*


## Color Palette
This section details the colors that should be used and to what degree.
Each color is presented in HEX, RGBA, and HSLA format, respectively.

#### Primary Color(s)
Primary color should be maintained as the dominant scheme and should be used for high-focus elements.
* Mintbean PrimaryDark `#0C9DCC`, `rgba(12, 157, 204, 1)`, or `hsla(195, 89%, 42%, 1)`
* Mintbean Primarylight `#08BCB9`, `rgba(8, 188, 185, 1)`, or `hsla(179, 92%, 38%, 1)`

#### Secondary Color(s)
Secondary colors should be used for low-focus elements or as an accent to a primary color.
* Mintbean SecondaryDark `#07EEA0`, `rgba(7, 238, 160, 1)`, or `hsla(160, 94%, 48%, 1)`
* Mintbean SecondaryLight `#DDFDF2`, `rgba(221, 253, 242, 1)`, or `hsla(159, 89%, 93%, 1)`

#### Neutrals
Neutrals should be designated for 'whitespace' and text and border properties.
* Mintbean NeutralLight `#D3EBF7`, `rgba(211, 235, 247, 1)`, or `hsla(200, 69%, 90%, 1)`
* Mintbean NeutralMed `#546C78`, `rgba(84, 108, 120, 1)`, or `hsla(200, 18%, 40%, 1)`
* Mintbean NeutralDark `#04131a`, `rgba(4, 19, 26, 1)`, or `hsla(200, 72%, 6%, 1)`

#### Shades
Box Shadows for element shading are recommended to be under `5px` in any direction and to use the following shade color: `rgba(60, 65, 75, .5)`

## Icons
This organizations primary logo is the following image:

<figure>
  <img src="../../../assets/mintbean-logo.png">
</figure>

Plain png, png with a removed background, and svg files can be found in `MintbanPlatform/frontend/src/md-pages/style-guide/` as...
* `mintbean-logo.png`
* `mintbean-logo-removebg.png`
* `mintbean-logo.svg`

## Buttons
This project will be utilizing *VueBootstrap* for a stylesheet library and the built in [VueBootstrap buttons](https://bootstrap-vue.org/docs/components/button) should be used

The *Primary* and *Secondary* buttons' colors should be overriden to match their respective project color pallate colors.
*Success*, *Danger*, *Warning*, nfo, light and dark.
