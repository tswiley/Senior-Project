$(document).ready(function () {
    const sections = [
        {
            target: "limited-release",
            title: "RLBC Limited Release",
            items: [
                { name: "American Cream Ale", abv: "5.8%", price: "$ 6.82" },
                { name: "El Brujo Especial Mexican Lager", abv: "5.6% ABV (30 IBU)", description: "This crispy Mexican Lager is generously hopped with El Dorado hops for a slightly fruity finish.", price: "$ 6.91" },
                { name: "Czech Pilsner", abv: "5.0% ABV (29.8 IBU)", description: "Brewed with Czech Saaz hops, which provides subtle spiciness to the overall flavor. Malt-forward, with notes of biscuit, cracker and bread. Refreshing and crisp.", price: "$ 7.03" },
                { name: "Belenus Chili Ale", abv: "4.6% ABV, 14 IBU", description: "This ale showcases a combination of caramelized and roasted malt character, a subtle spiced hop flavor and finished with fire-roasted Marisol chilis from Pueblo.", price: "$ 7.96" },
                { name: "Chocolate Raspberry Porter", abv: "6.6% ABV (32 IBU)", description: "This English style porter is fermented with cocoa nibs and finished on a ludicrous amount of raspberries. The beer hits you with a kick of raspberry, and finishes smooth with the English yeast character and chocolate forward grain bill.", price: "$ 7.96" },
                { name: "Cinnamon Roll Stout", abv: "5.9% ABV (35 IBU)", description: "Cinnamon Roll Oatmeal Pastry Stout is a rich and velvety stout brewed with a hearty dose of oats, giving it a smooth, creamy texture that perfectly complements the indulgent flavors of cinnamon and pastry. With its hints of sweet vanilla icing, roasted malts, and a touch of caramel, it's the ultimate treat for those cozy evenings by the fire or any time you crave a liquid dessert. Sip, savor, and let the comforting flavors of home-baked goodness envelop your senses.", price: "$ 8.39" },
                { name: "Space Force One Double Hazy IPA", abv: "8.0% ABV", price: "$ 8.66" },
                { name: "Blood Orange Space Force One Double Hazy IPA", price: "$ 8.87" }
            ]
        },
        {
            target: "flagship-beers",
            title: "RLBC Flagship Beers",
            items: [
                { name: "Springs Lite Lager", abv: "4.1% ABV, 14 IBU", description: "A filtered lager with subtle pine and citrus notes from the Nobel hops which produce a delicately bitter finish. Flaked corn adds a slight sweet smoothness that excites the palate. It’s as cold as the Rampart Range and is sure to be the crispiest boi you’ve ever enjoyed.", price: "$ 5.41" },
                { name: "Helo Hefe Hefeweizen", abv: "5.3% ABV, 12 IBU", description: "A pale, hazy, light-bodied & refreshing German-style wheat beer with a distinctive banana & clove yeast character with a dry finish.", price: "$ 6.82" },
                { name: "Howitzer Amber Ale", abv: "5.4% ABV, 33 IBU", description: "A ruby-copper colored beer balanced between malt & hops. A distinct caramel aroma & flavor greets your palate with a pleasant malty finish. GABF Gold Winner, 2020", price: "$ 6.82" },
                { name: "West Coast IPA", abv: "7.5% ABV, 70 IBU", description: "This West Coast IPA is a good ole clean, crisp, and refreshing traditional IPA with piney and resinous notes. Brewed with Mosaic, Amarillo, and Centennial hops.", price: "$ 7.57" },
                { name: "Hazy IPA", abv: "6% ABV, 45 IBU", description: "The aroma evokes fresh mango, ripe pineapple, & tangerine zest. A velvety soft mouthfeel compliments the aroma, creating a pleasant & easy drinking IPA.", price: "$ 7.58" }
            ]
        },
        {
            target: "guest-taps",
            title: "Guest Taps",
            items: [
                { name: "Brooklyn Bel Air Sour", abv: "5.8% ABV", description: "This sour ale starts up with bright notes of tropical fruit yet finishes crisp and gently tart. It's atrip that's laid back, breezy, and completely refreshing.", price: "$ 8.39" },
                { name: "Destihl WSS Apple Pie Sour", abv: "4.6%", description: "This seasonal kettle sour ale is inspired by the flavors of the classic American apple pie dessert. Brewed with tart apple & cinnamon flavors and lactose, this ale hits all the notes with a light body & tart finish.", price: "$ 8.39" }
            ]
        },
        {
            target: "gluten-free",
            title: "Gluten-Free",
            items: [
                { name: "*G.F* Fat Randy's IPA", abv: "7% ABV", description: "Holidaily Brewing Company (12 oz can) Complex floral and citrus hop notes, with a smooth, malty finish. The best friend of Holidaily Founder’s husband, Fat Randy is a Colorado guy through and through. Not fat, though called Fat Randy for more 20 years, Holidaily wanted to give the guy a break and name a beer after him. Fat Randy’s IPA comes complete with a label designed after an epic ski fall you can watch on YouTube.", price: "$ 5.68" },
                { name: "*G.F* Big Henry Hazy IPA", abv: "6.3% ABV", description: "Holidaily Brewing Company (12 oz can) Big Henry Hazy IPA is a nod to the \"trophy fish\" that's always just out of reach. A juicy and balanced mix of citrus hops and tropical flavors - this beer is off the hook!", price: "$ 5.68" },
                { name: "*G.F* Favorite Blonde Ale", abv: "5% ABV", description: "Holidaily Brewing Company (12 oz can) Grandpa was a small town optometrist who called his granddaughter and Holidaily founder his “Favorite Blonde.” Inspired by the man who helped others see the value of a good time, our blonde ale has a subtle hop character and mellow malt flavor.", price: "$ 5.68" }
            ]
        },
        {
            target: "flights",
            title: "Flights",
            items: [
                { name: "Create Your Own Flight", description: "Pick 4 from our tap List", price: "$ 12.00" }
            ]
        },
    ];

    const contentContainer = $('#content-container');

    function generateSectionHTML(section) {
        const sectionHTML = `<section class="section ${section.target}">
                                <h2>${section.title}</h2>
                                <div class="items">${generateItemsHTML(section.items)}</div>
                            </section>`;
        return sectionHTML;
    }

    function generateItemsHTML(items) {
        return items.map(item => `<div class="item">
                                    <h3>${item.name} ${item.abv ? `(${item.abv})` : ''}</h3>
                                    ${item.description ? `<p>${item.description}</p>` : ''}
                                    <p>${item.price}</p>
                                </div>`).join('');
    }

    function showSection(target) {
        contentContainer.empty();
        const section = sections.find(s => s.target === target);
        if (section) {
            contentContainer.append(generateSectionHTML(section));
        }
    }

    $('.tab-menu button').on('click', function () {
        const target = $(this).data('target');
        showSection(target);
    });

    // Initialize with the first section
    showSection(sections[0].target);
});
