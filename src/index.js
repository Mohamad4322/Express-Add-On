/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

const IMAGES = new Map([
    ['001-briefcase.png', './images/001-briefcase.png'],
 ['002-cooperation.png', './images/002-cooperation.png'],
 ['003-briefcase-1.png', './images/003-briefcase-1.png'],
 ['004-portfolio.png', './images/004-portfolio.png'],
 ['005-team.png', './images/005-team.png'],
 ['006-stats.png', './images/006-stats.png'],
 ['007-analysis.png', './images/007-analysis.png'],
 ['008-handshake.png', './images/008-handshake.png'],
 ['009-investment.png', './images/009-investment.png'],
 ['010-cooperation-1.png', './images/010-cooperation-1.png'],
 ['011-cooperation-2.png', './images/011-cooperation-2.png'],
 ['012-business.png', './images/012-business.png'],
 ['013-monitor.png', './images/013-monitor.png'],
 ['014-branch.png', './images/014-branch.png'],
 ['015-scale-up.png', './images/015-scale-up.png'],
 ['016-revenue.png', './images/016-revenue.png'],
 ['017-partnership.png', './images/017-partnership.png'],
 ['018-income.png', './images/018-income.png'],
 ['019-briefcase-2.png', './images/019-briefcase-2.png'],
 ['020-consultation.png', './images/020-consultation.png'],
 ['021-research-and-development.png',
  './images/021-research-and-development.png'],
 ['022-monitor-1.png', './images/022-monitor-1.png'],
 ['023-methodology.png', './images/023-methodology.png'],
 ['024-business-model.png', './images/024-business-model.png'],
 ['025-gold-ingots.png', './images/025-gold-ingots.png'],
 ['026-growth.png', './images/026-growth.png'],
 ['027-save-money.png', './images/027-save-money.png'],
 ['028-bar.png', './images/028-bar.png'],
 ['029-diagram.png', './images/029-diagram.png'],
 ['030-process.png', './images/030-process.png'],
 ['031-money.png', './images/031-money.png'],
 ['032-growth-1.png', './images/032-growth-1.png'],
 ['033-corporate.png', './images/033-corporate.png'],
 ['034-team-1.png', './images/034-team-1.png'],
 ['035-growth-2.png', './images/035-growth-2.png'],
 ['036-growth-3.png', './images/036-growth-3.png'],
 ['037-incorporation.png', './images/037-incorporation.png'],
 ['038-business-1.png', './images/038-business-1.png'],
 ['039-localization.png', './images/039-localization.png'],
 ['040-briefcase-3.png', './images/040-briefcase-3.png'],
 ['041-financing.png', './images/041-financing.png'],
 ['042-presentation.png', './images/042-presentation.png'],
 ['043-innovation.png', './images/043-innovation.png'],
 ['044-company-vision.png', './images/044-company-vision.png'],
 ['045-earth.png', './images/045-earth.png'],
 ['046-species.png', './images/046-species.png'],
 ['047-biodiversity.png', './images/047-biodiversity.png'],
 ['048-animals.png', './images/048-animals.png'],
 ['049-ecosystem.png', './images/049-ecosystem.png'],
 ['050-biodiversity-1.png', './images/050-biodiversity-1.png'],
 ['051-climate.png', './images/051-climate.png'],
 ['052-ecosystem-1.png', './images/052-ecosystem-1.png'],
 ['053-biodiversity-2.png', './images/053-biodiversity-2.png'],
 ['054-animals-1.png', './images/054-animals-1.png'],
 ['055-species-1.png', './images/055-species-1.png'],
 ['056-genetic.png', './images/056-genetic.png'],
 ['057-animals-2.png', './images/057-animals-2.png'],
 ['058-environment.png', './images/058-environment.png'],
 ['059-marine-biology.png', './images/059-marine-biology.png'],
 ['060-biodiversity-3.png', './images/060-biodiversity-3.png'],
 ['061-ecosystem-2.png', './images/061-ecosystem-2.png'],
 ['062-biodiversity-loss.png', './images/062-biodiversity-loss.png'],
 ['063-biodiversity-4.png', './images/063-biodiversity-4.png'],
 ['064-environment-1.png', './images/064-environment-1.png'],
 ['065-recipe.png', './images/065-recipe.png'],
 ['066-egg.png', './images/066-egg.png'],
 ['067-food.png', './images/067-food.png'],
 ['068-nutrition.png', './images/068-nutrition.png'],
 ['069-recipes.png', './images/069-recipes.png'],
 ['070-recipe-1.png', './images/070-recipe-1.png'],
 ['071-cook.png', './images/071-cook.png'],
 ['072-frying-pan.png', './images/072-frying-pan.png'],
 ['073-recipes-1.png', './images/073-recipes-1.png'],
 ['074-rolling-pin.png', './images/074-rolling-pin.png'],
 ['075-frying-pan-1.png', './images/075-frying-pan-1.png'],
 ['076-check.png', './images/076-check.png'],
 ['077-app.png', './images/077-app.png'],
 ['078-cookbook.png', './images/078-cookbook.png'],
 ['079-cut.png', './images/079-cut.png'],
 ['080-flour.png', './images/080-flour.png'],
 ['081-kitchen-tools.png', './images/081-kitchen-tools.png'],
 ['082-recipes-2.png', './images/082-recipes-2.png'],
 ['083-video.png', './images/083-video.png'],
 ['084-mix.png', './images/084-mix.png'],
 ['085-chef-hat.png', './images/085-chef-hat.png'],
 ['086-pour.png', './images/086-pour.png'],
 ['087-beef.png', './images/087-beef.png'],
 ['088-chef.png', './images/088-chef.png'],
 ['089-idea.png', './images/089-idea.png'],
 ['090-cookbook-1.png', './images/090-cookbook-1.png'],
 ['091-salt.png', './images/091-salt.png'],
 ['092-cooking-time.png', './images/092-cooking-time.png'],
 ['093-frying-pan-2.png', './images/093-frying-pan-2.png'],
 ['094-fish.png', './images/094-fish.png'],
 ['095-picnic.png', './images/095-picnic.png'],
 ['096-diwali.png', './images/096-diwali.png'],
 ['097-pool.png', './images/097-pool.png'],
 ['098-sakura.png', './images/098-sakura.png'],
 ['099-cocktail.png', './images/099-cocktail.png'],
 ['100-fireworks.png', './images/100-fireworks.png'],
 ['101-united-states.png', './images/101-united-states.png'],
 ['102-menorah.png', './images/102-menorah.png'],
 ['103-thanksgiving.png', './images/103-thanksgiving.png'],
 ['104-halloween.png', './images/104-halloween.png'],
 ['105-lantern.png', './images/105-lantern.png'],
 ['106-stadium.png', './images/106-stadium.png'],
 ['107-soccer-stadium.png', './images/107-soccer-stadium.png'],
 ['108-stadium-1.png', './images/108-stadium-1.png'],
 ['109-tennis-stadium.png', './images/109-tennis-stadium.png'],
 ['110-stadium-2.png', './images/110-stadium-2.png'],
 ['111-stadium-3.png', './images/111-stadium-3.png'],
 ['112-baseball-stadium.png', './images/112-baseball-stadium.png'],
 ['113-stadium-4.png', './images/113-stadium-4.png'],
 ['114-stadium-5.png', './images/114-stadium-5.png'],
 ['115-stadium-6.png', './images/115-stadium-6.png'],
 ['116-stadium-7.png', './images/116-stadium-7.png'],
 ['117-stadium-8.png', './images/117-stadium-8.png'],
 ['118-stadium-9.png', './images/118-stadium-9.png'],
 ['119-stadium-10.png', './images/119-stadium-10.png'],
 ['120-stadium-11.png', './images/120-stadium-11.png'],
 ['121-stadium-12.png', './images/121-stadium-12.png'],
 ['122-stadium-13.png', './images/122-stadium-13.png'],
 ['123-stadium-14.png', './images/123-stadium-14.png'],
 ['124-stadium-15.png', './images/124-stadium-15.png'],
 ['125-stadium-16.png', './images/125-stadium-16.png'],
 ['126-apple.png', './images/126-apple.png'],
 ['127-webinar.png', './images/127-webinar.png'],
 ['128-bookmark.png', './images/128-bookmark.png'],
 ['129-smartphone.png', './images/129-smartphone.png'],
 ['130-qna.png', './images/130-qna.png'],
 ['131-trophy.png', './images/131-trophy.png'],
 ['132-ebook.png', './images/132-ebook.png'],
 ['133-graduate.png', './images/133-graduate.png'],
 ['134-video-conference.png', './images/134-video-conference.png'],
 ['135-online-learning.png', './images/135-online-learning.png'],
 ['136-video-1.png', './images/136-video-1.png'],
 ['137-webinar-1.png', './images/137-webinar-1.png'],
 ['138-certificate.png', './images/138-certificate.png'],
 ['139-online-learning-1.png', './images/139-online-learning-1.png'],
 ['AdobeIllustrator.png', './images/AdobeIllustrator.png'],
 ['AdobePhotoshop.png', './images/AdobePhotoshop.png'],
 ['AdobeXD.png', './images/AdobeXD.png'],
 ['Aim.png', './images/Aim.png'],
 ['Airbnb.png', './images/Airbnb.png'],
 ['Amazon.png', './images/Amazon.png'],
 ['Android.png', './images/Android.png'],
 ['Apple.png', './images/Apple.png'],
 ['Atlassian.png', './images/Atlassian.png'],
 ['Badoo.png', './images/Badoo.png'],
 ['Basecamp.png', './images/Basecamp.png'],
 ['Behance.png', './images/Behance.png'],
 ['Bing.png', './images/Bing.png'],
 ['Bitbucket.png', './images/Bitbucket.png'],
 ['Bitcoin.png', './images/Bitcoin.png'],
 ['Bittorrent.png', './images/Bittorrent.png'],
 ['Blogger.png', './images/Blogger.png'],
 ['Buffer.png', './images/Buffer.png'],
 ['BuzzFeed.png', './images/BuzzFeed.png'],
 ['Codeopen.png', './images/Codeopen.png'],
 ['Confluence.png', './images/Confluence.png'],
 ['Coub.png', './images/Coub.png'],
 ['Creativemarket.png', './images/Creativemarket.png'],
 ['Dailymotion.png', './images/Dailymotion.png'],
 ['Digg.png', './images/Digg.png'],
 ['Discord.png', './images/Discord.png'],
 ['Dribbble.png', './images/Dribbble.png'],
 ['Dropbox.png', './images/Dropbox.png'],
 ['Drupal.png', './images/Drupal.png'],
 ['DuckDuckGo.png', './images/DuckDuckGo.png'],
 ['Edge.png', './images/Edge.png'],
 ['Epic Games.png', './images/Epic Games.png'],
 ['Ethereum.png', './images/Ethereum.png'],
 ['Evernote.png', './images/Evernote.png'],
 ['Facebook.png', './images/Facebook.png'],
 ['Fancy.png', './images/Fancy.png'],
 ['Figma.png', './images/Figma.png'],
 ['Firefox.png', './images/Firefox.png'],
 ['Flickr.png', './images/Flickr.png'],
 ['Foursquare.png', './images/Foursquare.png'],
 ['Framer.png', './images/Framer.png'],
 ['Github.png', './images/Github.png'],
 ['Gmail.png', './images/Gmail.png'],
 ['Google.png', './images/Google.png'],
 ['GooglePlay.png', './images/GooglePlay.png'],
 ['Hola.png', './images/Hola.png'],
 ['HTML5.png', './images/HTML5.png'],
 ['Iconjar.png', './images/Iconjar.png'],
 ['Instagram.png', './images/Instagram.png'],
 ['Intercom.png', './images/Intercom.png'],
 ['Invision.png', './images/Invision.png'],
 ['Jira.png', './images/Jira.png'],
 ['Kaixin001.png', './images/Kaixin001.png'],
 ['KakaoTalk.png', './images/KakaoTalk.png'],
 ['Kickstarter.png', './images/Kickstarter.png'],
 ['Line.png', './images/Line.png'],
 ['LinkedIN.png', './images/LinkedIN.png'],
 ['MailChimp.png', './images/MailChimp.png'],
 ['Mail_ru.png', './images/Mail_ru.png'],
 ['Marvel.png', './images/Marvel.png'],
 ['Mastercard.png', './images/Mastercard.png'],
 ['Medium.png', './images/Medium.png'],
 ['Messenger.png', './images/Messenger.png'],
 ['Mi.png', './images/Mi.png'],
 ['Microsoft.png', './images/Microsoft.png'],
 ['Miliao.png', './images/Miliao.png'],
 ['Netflix.png', './images/Netflix.png'],
 ['Nintendo.png', './images/Nintendo.png'],
 ['Notion.png', './images/Notion.png'],
 ['OK.png', './images/OK.png'],
 ['Opera.png', './images/Opera.png'],
 ['Outlook.png', './images/Outlook.png'],
 ['Patreon.png', './images/Patreon.png'],
 ['PayPal.png', './images/PayPal.png'],
 ['Periscope.png', './images/Periscope.png'],
 ['Pinterest.png', './images/Pinterest.png'],
 ['Playstation.png', './images/Playstation.png'],
 ['Pocket.png', './images/Pocket.png'],
 ['ProductHunt.png', './images/ProductHunt.png'],
 ['QQ.png', './images/QQ.png'],
 ['Quora.png', './images/Quora.png'],
 ['Reddit.png', './images/Reddit.png'],
 ['Renren.png', './images/Renren.png'],
 ['RSS.png', './images/RSS.png'],
 ['Safari.png', './images/Safari.png'],
 ['Shopify.png', './images/Shopify.png'],
 ['Shutterstock.png', './images/Shutterstock.png'],
 ['Sketch.png', './images/Sketch.png'],
 ['Skype.png', './images/Skype.png'],
 ['Slack.png', './images/Slack.png'],
 ['Snapchat.png', './images/Snapchat.png'],
 ['Spotify.png', './images/Spotify.png'],
 ['Steam.png', './images/Steam.png'],
 ['Strava.png', './images/Strava.png'],
 ['StumbleUpon.png', './images/StumbleUpon.png'],
 ['Taobao.png', './images/Taobao.png'],
 ['TeamViewer.png', './images/TeamViewer.png'],
 ['Telegram.png', './images/Telegram.png'],
 ['Tidal.png', './images/Tidal.png'],
 ['Tik Tok.png', './images/Tik Tok.png'],
 ['Tilda.png', './images/Tilda.png'],
 ['Tinder.png', './images/Tinder.png'],
 ['Tor.png', './images/Tor.png'],
 ['Treehouse.png', './images/Treehouse.png'],
 ['Trello.png', './images/Trello.png'],
 ['Tripadvisor.png', './images/Tripadvisor.png'],
 ['Tumblr.png', './images/Tumblr.png'],
 ['Twitch.png', './images/Twitch.png'],
 ['Twitter.png', './images/Twitter.png'],
 ['Ubuntu.png', './images/Ubuntu.png'],
 ['ui8.png', './images/ui8.png'],
 ['Uplabs.png', './images/Uplabs.png'],
 ['Utorrent.png', './images/Utorrent.png'],
 ['Viadeo.png', './images/Viadeo.png'],
 ['Viber.png', './images/Viber.png'],
 ['Vimeo.png', './images/Vimeo.png'],
 ['Vine.png', './images/Vine.png'],
 ['Visa.png', './images/Visa.png'],
 ['VK.png', './images/VK.png'],
 ['Wechat.png', './images/Wechat.png'],
 ['Weibo.png', './images/Weibo.png'],
 ['WhatsApp.png', './images/WhatsApp.png'],
 ['Windows.png', './images/Windows.png'],
 ['Wordpress.png', './images/Wordpress.png'],
 ['Xbox.png', './images/Xbox.png'],
 ['YandexBrowser.png', './images/YandexBrowser.png'],
 ['Yelp.png', './images/Yelp.png'],
 ['Youtube.png', './images/Youtube.png'],
 ['Zendesk.png', './images/Zendesk.png'],
 ['Zerpply.png', './images/Zerpply.png'],
 ['Zoom.png', './images/Zoom.png']
]);

let gallery;

// Wait for the SDK to be ready before rendering elements in the DOM.
AddOnSdk.ready.then(async () => {
    // Create elements in the DOM.
    gallery = document.createElement("div");
    gallery.className = "gallery";

    IMAGES.forEach((url, id) => {
        const image = document.createElement("img");
        image.id = id;
        image.src = url;
        image.addEventListener("click", addToDocument);

        // Enable drag to document for the image.
        AddOnSdk.app.enableDragToDocument(image, {
            previewCallback: element => {
                return new URL(element.src);
            },
            completionCallback: async (element) => {
                return [{ blob: await getBlob(element.src) }];
            }
        });

        gallery.appendChild(image);
    });

    // Register event handler for "dragstart" event
    AddOnSdk.app.on("dragstart", startDrag);
     // Register event handler for 'dragend' event
    AddOnSdk.app.on("dragend", endDrag);

    document.body.appendChild(gallery);
});

/**
 * Add image to the document.
 */
async function addToDocument(event) {
    const url = event.currentTarget.src;
    const blob = await getBlob(url);
    AddOnSdk.app.document.addImage(blob);
}

/**
 * Handle "dragstart" event
 */
function startDrag(eventData) {
    console.log("The drag event has started for", eventData.element.id);
}

/**
 * Handle "dragend" event
 */
function endDrag(eventData) {
    if (!eventData.dropCancelled) {
        console.log("The drag event has ended for", eventData.element.id);
    } else {
        console.log("The drag event was cancelled for", eventData.element.id);
    }
}

/**
 * Get the binary object for the image.
 */
async function getBlob(url) {
    return await fetch(url).then(response => response.blob());
}
