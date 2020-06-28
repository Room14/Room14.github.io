/*
this is the code for the login page,
you will see a file called "testencodedjs.js",
that file has all of the code for the login page
but it is all encoded so you can't view usernames.

if you want to make changes to the login javascript
then edit this file to what you want to change
once that is done, copy this file's code
and go to a website called "obfuscator.io"
on that site scroll down and make sure the settings
match the ones in the image at "./images/Screenshot (7).png".
Then paste the code and click Obfuscate,
it will then output some encoded code,
copy this and replace the code in "testencodedjs.js"
with that code.

Its easier than it sounds
Scott.


*/





function check(form) {
        var accounts = [
          'isabelleb20',
          'ellab20',
          'hunterc20',
          'maisied20',
          'jessd20',
          'jacksonh20',
          'johnh20',
          'archiej20',
          'annabelk20',
          'oliverl20',
          'husainm20',
          'elizabethm20',
          'arin20',
          'camerono20',
          'natashao20',
          'ebens20',
          'jarvisx20',
          'aaronz20',
          'joelc19',
          'brendanc19',
          'amyd19',
          'judahd19',
          'sukhmanpreetk19',
          'heidil19',
          'caram19',
          'aaminahm19',
          'luciem19',
          'scottm19',
          'emerym19',
          'lucasr19',
          'biancas19',
          'matthewt19',
          'emilyt19',
          'danielt19',
          'vboswell'
        ]
        var passwords = [
          'im good',
          'hiiiii',
          'fairfield'
        ]
        var admins = [
          'aaronz20',
          'scottm19',
          'vboswell'
        ]


        /*the following code checkes whether the entered userid and password are matching*/
        if (admins.includes(form.userid.value) && form.pswrd.value == form.userid.value + '20') {
          alert('Welcome, Admin!')
          window.open('admin-oGp2rRCKElH5oTM07s01vitlh4JfbXg9nm6F3eHo.html')
        } else {
          if (accounts.includes(form.userid.value) && form.pswrd.value == 'fairfield') {

            alert('Welcome, ' + form.userid.value)
            window.open(
              'logged-in-eLx8vUsjiaeuZZ4sKDjcHLx25fIWpNrcm5k3gZQn.html'
            ) /*opens the target page while Id & password matches*/

          } else {
            if (accounts.includes(form.userid.value)) {
              alert("Error, Incorrect Password")
            } else {
              if (form.pswrd.value == 'fairfield') {
                alert("Error, Incorrect Username")
              } else {
                alert("Error, Incorrect Password And Username")
              }

            }
          }
        }
      }
