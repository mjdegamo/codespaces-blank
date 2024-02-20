import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blogs: Blog[] = [
      {
        id: 1,
        category: ['technology'],
        title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'mario sanchez',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=1920&q=75',
        datePosted: new Date(10 / 21 / 2022),
      },
      {
        id: 2,
        category: ['lifestyle'],
        title: '14 Architectural Design Ideas for a Spacious Interior',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'mario sanchez',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75',
        datePosted: new Date(10 / 21 / 2022),
      },
      {
        id: 3,
        category: ['design', 'lifestyle'],
        title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'mario sanchez',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F12301f301772ed723724302aef7c70c5c1c0151f-4500x8000.jpg%3Frect%3D0%2C1080%2C4500%2C5330%26w%3D2000%26auto%3Dformat&w=640&q=75',
        datePosted: new Date(10 / 21 / 2022),
      },
      {
        id: 4,
        category: ['lifestyle', 'physical growth'],
        title: 'Every Next Level of Your Life Will Demand a Different You',
        content: 'Reinvention  often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'mario sanchez',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75',
        datePosted: new Date(10 / 20 / 2022),
      },
      {
        id: 5,
        category: ['travel'],
        title: 'This Bread Pudding Will Give You All the Fall Feels',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'erika oliver',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75',
        datePosted: new Date(10 / 21 / 2022),
      },
      {
        id: 6,
        category: ['travel'],
        title: 'I Moved Across the Country and Never Looked Back',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'joshua wood',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75',
        datePosted: new Date(10 / 19 / 2022),
      },
      {
        id: 7,
        category: ['personal growth'],
        title: '3 Meaningful Ways to Practice Self-Care as an Introvert',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'mario sanchez',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=1920&q=75',
        datePosted: new Date(10 / 18 / 2022),
      },
      {
        id: 8,
        category: ['personal growth'],
        title: 'The Rise of Artificial Intelligence and the Future of Humans',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'joshua wood',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75',
        datePosted: new Date(10 / 21 / 2022),
      },
      {
        id: 9,
        category: ['personal growth'],
        title: '10 Simple Practices That Will Help You Get 1% Better Every Day',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'erika oliver',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75',
        datePosted: new Date(10 / 4 / 2022),
      },
      {
        id: 10,
        category: ['design'],
        title: 'Every Artist has to see the Amazing Pictures on the Internet',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'mario sanchez',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=640&q=75',
        datePosted: new Date(10 / 23 / 2022),
      },
      {
        id: 11,
        category: ['technology'],
        title: 'How Technology Evolved Under the Bright Sun of Universe',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'erika oliver',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75',
        datePosted: new Date(9 / 30 / 2022),
      },
      {
        id: 12,
        category: ['travel'],
        title: 'Lessons Of Happiness I learned from a Mountain Village',
        content: 'Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limeligh0t.',
        author: 'joshua wood',
        imageLink: 'https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75',
        datePosted: new Date(10 / 19 / 2022),
      }
    ];
    
    return { blogs };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}
