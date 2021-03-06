# simple-eag
Chrome Extension that lets you generate a random email alias with any email domain you wish.

## Demonstation

![](https://i.imgur.com/SH32qmt.gif)

### Email Format

The format of the generated emails is the following:

<pre>websitedomain.bunchofcharacters@domain.domain</pre>

*websitedomain*: The domain of the website you're generating the email from. For instance, generating an email on https://github.com will give you "github", and generating an email from https://developers.google.com/ will give you "google".

*bunchofcharacters*: This part of the email is randomised. Because the code is using MD5 to do so, the possible characters range from 0-9 and a-z (lowercase).

*domain.domain*: It is your email domain. By default, it is set to "changeyourdomain.com". Of course, the only real use you'll be getting from this extension is if you own a [Catch-all domain](https://protonmail.com/support/knowledge-base/catch-all/), in which case you need to change it to your own domain.

## Installation

This chrome extension has not been approved in any way by Google. Please use it at your own risk. 

Before installing the extension, you need to change the domain of the email, which has been set to "changeyourdomain.com" by default. To do so, open the "bg.js" using any text editor and edit the domain on line 12.

Once that is done, in order to install it, you need to activate the Developer mode on Google Chrome, which allows you to load local extensions. Here is a short tutorial made by Google:

https://developer.chrome.com/extensions/getstarted#manifest

## How to use the extension

To generate a random email, all you have to do is select the text box you want the email to be generated in, right-click, and select the option "Generate Email". This should automatically place the email inside the text box. 

## Known issues

Because the extension is very simple by nature, I have not implemented any filters whatsoever. It means that the "Generate Email" option is available anywhere, anytime regardless of the place you right-click on. This doesn't cause any real issues, but it's there.

Please note that some websites need for the textbox to be updated in order to read the email in the textbox that you have generated. Deleting the last character of the email and adding it back should automatically resolve this issue.
