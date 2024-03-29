import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() { }

  generatePdf(): void {

    const logo = '/assets/Images/logo.png';
    const photo = '/assets/Images/photo.png';
    const screenshot = '/assets/Images/screenshot.png';
    const audio = '/assets/Images/audio.png';

    Promise.all([
      this.getBase64ImageFromUrl(logo),
      this.getBase64ImageFromUrl(photo),
      this.getBase64ImageFromUrl(screenshot),
      this.getBase64ImageFromUrl(audio),
    ]).then(([logo, photo, screenshot, audio]) => {

      const documentDefinition: any = {
        content: [
          {
            image: logo,
            width: 200,
            alignment: 'center',
          },
          {
            text: 'Insta PIV Transcript',
            alignment: 'center',
            style: 'heading'
          },
          {
            columns: [
              {
                stack: [
                  { text: 'Proposal No: 1KNG902026', margin: [1.3, 1.3] },
                  { text: 'Name: Mrs. Mrunmayee Gajanan Chavan', margin: [1.3, 1.3] },
                  { text: 'Product: Smart Wealth Builder', margin: [1.3, 1.3] },
                  { text: 'Category: ULIP', margin: [1.3, 1.3] },
                  { text: 'Plan:', margin: [1.3, 1.3] }, // Add the plan value here if available
                  { text: 'Premium Amount: 100000', margin: [1.3, 1.3] },
                  { text: 'Sum Assured: 1000000', margin: [1.3, 1.3] },
                  { text: 'Frequency: Yearly', margin: [1.3, 1.3] },
                  { text: 'Term: 7', margin: [1.3, 1.3] },
                  { text: 'Source: MCONNECT', margin: [1.3, 1.3] },
                  { text: 'Channel Name: CIF', margin: [1.3, 1.3] },
                  { text: 'CIF/Agent ID: 991139926', margin: [1.3, 1.3] }
                ],
                width: '50%',
                alignment: 'left',
              },
              {
                stack: [
                  { text: 'Platform: Android', margin: [1.3, 1.3] },
                  { text: 'Device Type: Mobile Phone', margin: [1.3, 1.3] },
                  { text: 'Device Name: Motorola Edge 40 - Smartphone', margin: [1.3, 1.3] },
                  { text: 'Browser: Chrome', margin: [1.3, 1.3] },
                  { text: 'Insta PIV Status: Clear Case', margin: [1.3, 1.3] },
                  { text: 'Completed On: 26-Feb-2024, 01:05:30 PM', margin: [1.3, 1.3] }
                ],
                width: '50%',
                alignment: 'right'
              }
            ]
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 400, // Height of the box
                    r: 30, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Photo 1', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'center',
                margin: [-50, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: -360, y: 410 }, // Absolute position to overlap with canvas
              },
              {
                image: screenshot,
                width: 200, // Adjust width as needed
                height: 350, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: 360, y: 430 }
              },
              {
                image: photo,
                width: 200, // Adjust width as needed
                height: 230, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: -270, y: 430 }
              },
              {
                image: audio,
                width: 20, // Adjust width as needed
                height: 20, // Adjust width as needed
                alignment: 'left',
                // margin: [0, 10, 0, 10], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 690 }
              },
              {
                text: 'Audio', // Replace with your heading text
                fontSize: 14,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 675 }, // Absolute position to overlap with canvas
              },
              {
                text: `Thank you for choosing SBI life as your preferred life insurance \n partner`, // Replace with your heading text
                fontSize: 10,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 710 }, // Absolute position to overlap with canvas
              },
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 400, // Height of the box
                    r: 30, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Photo 2', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'center',
                margin: [-50, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                image: screenshot,
                width: 200, // Adjust width as needed
                height: 350, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: 360, y: 60 }
              },
              {
                image: photo,
                width: 200, // Adjust width as needed
                height: 230, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: -270, y: 110 }
              },
              {
                image: audio,
                width: 20, // Adjust width as needed
                height: 20, // Adjust width as needed
                alignment: 'left',
                // margin: [0, 10, 0, 10], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 370 }
              },
              {
                text: 'Audio', // Replace with your heading text
                fontSize: 14,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 355 }, // Absolute position to overlap with canvas
              },
              {
                text: `Thank you for choosing SBI life as your preferred life insurance \n partner`, // Replace with your heading text
                fontSize: 10,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 390 }, // Absolute position to overlap with canvas
              },
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 60, // Height of the box
                    r: 3, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Responses', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, -50, 0, 0], // Adjust margin to position the heading above the canvas
                // absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                text: `Agreement Status : ${'yes'}`, // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'green',
                alignment: 'left',
                margin: [0, 10, 0, 0], // Adjust margin to position the heading above the canvas
                // absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              }
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 400, // Height of the box
                    r: 30, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Photo 3', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'center',
                margin: [-50, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                image: screenshot,
                width: 200, // Adjust width as needed
                height: 350, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: 360, y: 60 }
              },
              {
                image: photo,
                width: 200, // Adjust width as needed
                height: 230, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: -270, y: 110 }
              },
              {
                image: audio,
                width: 20, // Adjust width as needed
                height: 20, // Adjust width as needed
                alignment: 'left',
                // margin: [0, 10, 0, 10], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 370 }
              },
              {
                text: 'Audio', // Replace with your heading text
                fontSize: 14,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 355 }, // Absolute position to overlap with canvas
              },
              {
                text: `Thank you for choosing SBI life as your preferred life insurance \n partner`, // Replace with your heading text
                fontSize: 10,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 390 }, // Absolute position to overlap with canvas
              },
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 60, // Height of the box
                    r: 3, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Responses', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, -50, 0, 0], // Adjust margin to position the heading above the canvas
                // absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                text: `Agreement Status : ${'yes'}`, // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'green',
                alignment: 'left',
                margin: [0, 10, 0, 0], // Adjust margin to position the heading above the canvas
                // absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              }
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 400, // Height of the box
                    r: 30, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Photo 4', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'center',
                margin: [-50, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                image: screenshot,
                width: 200, // Adjust width as needed
                height: 350, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: 360, y: 60 }
              },
              {
                image: photo,
                width: 200, // Adjust width as needed
                height: 230, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: -270, y: 110 }
              },
              {
                image: audio,
                width: 20, // Adjust width as needed
                height: 20, // Adjust width as needed
                alignment: 'left',
                // margin: [0, 10, 0, 10], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 370 }
              },
              {
                text: 'Audio', // Replace with your heading text
                fontSize: 14,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 355 }, // Absolute position to overlap with canvas
              },
              {
                text: `Thank you for choosing SBI life as your preferred life insurance \n partner`, // Replace with your heading text
                fontSize: 10,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 390 }, // Absolute position to overlap with canvas
              },
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 60, // Height of the box
                    r: 3, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Responses', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, -50, 0, 0], // Adjust margin to position the heading above the canvas
                // absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                text: `Agreement Status : ${'yes'}`, // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'green',
                alignment: 'left',
                margin: [0, 10, 0, 0], // Adjust margin to position the heading above the canvas
                // absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              }
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 400, // Height of the box
                    r: 30, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Photo 5', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'center',
                margin: [-50, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                image: screenshot,
                width: 200, // Adjust width as needed
                height: 350, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: 360, y: 60 }
              },
              {
                image: photo,
                width: 200, // Adjust width as needed
                height: 230, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: -270, y: 110 }
              },
              {
                image: audio,
                width: 20, // Adjust width as needed
                height: 20, // Adjust width as needed
                alignment: 'left',
                // margin: [0, 10, 0, 10], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 370 }
              },
              {
                text: 'Audio', // Replace with your heading text
                fontSize: 14,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 355 }, // Absolute position to overlap with canvas
              },
              {
                text: `Thank you for choosing SBI life as your preferred life insurance \n partner`, // Replace with your heading text
                fontSize: 10,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 390 }, // Absolute position to overlap with canvas
              },
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 60, // Height of the box
                    r: 3, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Responses', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, -50, 0, 0], // Adjust margin to position the heading above the canvas
                // absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                text: `Agreement Status : ${'yes'}`, // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'green',
                alignment: 'left',
                margin: [0, 10, 0, 0], // Adjust margin to position the heading above the canvas
                // absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              }
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 400, // Height of the box
                    r: 30, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Photo 6', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'center',
                margin: [-50, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                image: screenshot,
                width: 200, // Adjust width as needed
                height: 350, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: 360, y: 60 }
              },
              {
                image: photo,
                width: 200, // Adjust width as needed
                height: 230, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: -270, y: 110 }
              },
              {
                image: audio,
                width: 20, // Adjust width as needed
                height: 20, // Adjust width as needed
                alignment: 'left',
                // margin: [0, 10, 0, 10], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 370 }
              },
              {
                text: 'Audio', // Replace with your heading text
                fontSize: 14,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 355 }, // Absolute position to overlap with canvas
              },
              {
                text: `Thank you for choosing SBI life as your preferred life insurance \n partner`, // Replace with your heading text
                fontSize: 10,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 390 }, // Absolute position to overlap with canvas
              },
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 60, // Height of the box
                    r: 3, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Responses', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, -50, 0, 0], // Adjust margin to position the heading above the canvas
                // absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                text: `Agreement Status : ${'yes'}`, // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'green',
                alignment: 'left',
                margin: [0, 10, 0, 0], // Adjust margin to position the heading above the canvas
                // absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              }
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 400, // Height of the box
                    r: 30, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Photo 7', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'center',
                margin: [-50, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: -370, y: 50 }, // Absolute position to overlap with canvas
              },
              {
                image: screenshot,
                width: 200, // Adjust width as needed
                height: 350, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: 360, y: 60 }
              },
              {
                image: photo,
                width: 200, // Adjust width as needed
                height: 230, // Adjust width as needed
                alignment: 'center',
                // margin : [-50,0,0,0],
                absolutePosition: { x: -270, y: 110 }
              },
              {
                image: audio,
                width: 20, // Adjust width as needed
                height: 20, // Adjust width as needed
                alignment: 'left',
                // margin: [0, 10, 0, 10], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 370 }
              },
              {
                text: 'Audio', // Replace with your heading text
                fontSize: 14,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 355 }, // Absolute position to overlap with canvas
              },
              {
                text: `Thank you for choosing SBI life as your preferred life insurance \n partner`, // Replace with your heading text
                fontSize: 10,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 0, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 390 }, // Absolute position to overlap with canvas
              },
            ],
          },
          {
            stack: [
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 550, // Width of the box
                    h: 140, // Height of the box
                    r: 3, // Border radius
                    color: '#cccccc' // Gray color
                  }
                ],
                alignment: 'center',
                margin: [0, 30, 0, 0]
              },
              {
                text: 'Thank You', // Replace with your heading text
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'left',
                margin: [0, 10, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 480 }, // Absolute position to overlap with canvas
              },
              {
                text: [
                  { text: 'Product Video : ', fontSize: 12, bold: true },
                  { text: 'Click Here', fontSize: 12, bold: true, decoration: 'underline', color: 'blue', link: 'https://video-link.com' } // Replace with your actual video link
                ],
                alignment: 'left',
                margin: [0, 10, 0, 0],
                absolutePosition: { x: 40, y: 500 }
              },
              {
                text: [
                  { text: 'Sales Brochure : ', fontSize: 12, bold: true, alignment: 'right' },
                  { text: 'Click Here', fontSize: 12, bold: true, decoration: 'underline', color: 'blue', link: 'https://video-link.com' } // Replace with your actual link
                ],
                margin: [0, 10, 0, 0],
                absolutePosition: { x: 0, y: 500 }
              },
              {
                text: [
                  { text: 'Smart Care : ', fontSize: 12, bold: true, alignment: 'left' },
                  { text: 'Click Here', fontSize: 12, bold: true, decoration: 'underline', color: 'blue', link: 'https://video-link.com' } // Replace with your actual link
                ],
                margin: [0, 10, 0, 0],
                absolutePosition: { x: 40, y: 520 }
              },
              {
                text: `Contact : 8857822354`, // Replace with your heading text
                fontSize: 12,
                bold: true,
                alignment: 'left',
                margin: [0, 10, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 540 }, // Absolute position to overlap with canvas
              },
              {
                text: `Agent Name : Ajay Kharat`, // Replace with your heading text
                fontSize: 12,
                bold: true,
                alignment: 'left',
                margin: [0, 10, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 560 }, // Absolute position to overlap with canvas
              },
              {
                text: `Agent Mobile No : 8857822354`, // Replace with your heading text
                fontSize: 12,
                bold: true,
                alignment: 'right',
                margin: [0, 10, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 0, y: 560 }, // Absolute position to overlap with canvas
              },
              {
                text: `Toll Free : 18002679090`, // Replace with your heading text
                fontSize: 12,
                bold: true,
                alignment: 'left',
                margin: [0, 10, 0, 0], // Adjust margin to position the heading above the canvas
                absolutePosition: { x: 40, y: 580 }, // Absolute position to overlap with canvas
              },
              {
                text: [
                  { text: 'Email : ', fontSize: 12, bold: true, alignment: 'center' },
                  { text: 'ajay.kharat@sbilife.co.in', fontSize: 12, bold: true, decoration: 'underline', color: 'blue', link: 'mailto:ajay.kharat@sbilife.co.in' } // Replace with your actual email
                ],
                margin: [0, 10, 0, 0],
                absolutePosition: { x: 0, y: 580 }
              },
              {
                text: [
                  { text: 'Website : ', fontSize: 12, bold: true, alignment: 'right' },
                  { text: 'https://www.sbilife.co.in', fontSize: 12, bold: true, decoration: 'underline', color: 'blue', link: 'https://www.sbilife.co.in' } // Replace with your actual website URL
                ],
                margin: [0, 10, 0, 0],
                absolutePosition: { x: 0, y: 580 }
              }
            ],
          },

        ],
        styles: {
          heading: {
            fontSize: 12.5,
            bold: true,
            margin: [0, 20, 0, 20], // [left, top, right, bottom] margin
          }
        }
      };
      pdfMake.createPdf(documentDefinition).open({}, window);
    })
  }


  // Image to Base64 Converter
  async getBase64ImageFromUrl(imageUrl: string): Promise<string> {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64Data = reader.result as string;
        resolve(base64Data);
      };
      reader.onerror = () => {
        reject('Error loading image');
      };
    });
  }
}
