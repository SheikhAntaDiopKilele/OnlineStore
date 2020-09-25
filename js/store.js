

storeApp.controller('AdminController', function ($scope, $filter) {
    $scope.isActive = false;
    $scope.sections = [
    //        { name: 'Grid View', class: "cbp-vm-grid" },
        {name: 'List View', class: "cbp-vm-list"}];

    $scope.setMaster = function (section) {
        $scope.selected = section;
        $scope.isActive = !$scope.isActive;
    }

    $scope.isSelected = function (section) {
        return $scope.selected === section;
    }

    var myStore = new store();
    $scope.currentPage = 0;
    $scope.pageSize = 9;
    $scope.numberOfPages = Math.ceil(myStore.products.length / $scope.pageSize);

    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.pagedItems = [];

    var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };
    $scope.search = function (name,query) {
        $scope.filteredItems = $filter('filter')(myStore.products, function (product) {
            for (var attr in product) {
                if (searchMatch(product[name], query))
                    return true;
            }
            return false;
        });
        $scope.currentPage = 0;
        $scope.groupToPages();
    };
    $scope.myFilter = function (column, category) {
        $scope.filteredItems = $filter('filter')(myStore.products, function (product) {
            for (var attr in product) {
                if (searchMatch(product[column], category))
                    return true;
            }
            return false;
        });
        $scope.currentPage = 0;
        $scope.groupToPages();
    };
    $scope.groupToPages = function () {
        $scope.pagedItems = [];

        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.pageSize === 0) {
                $scope.pagedItems[Math.floor(i / $scope.pageSize)] = [$scope.filteredItems[i]];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.pageSize)].push($scope.filteredItems[i]);
            }
        }
    };
    // functions have been describe process the data for display
    $scope.myFilter();
    $scope.search();

});


function store() {
    this.products = [
          { num: 1, code: 'APL', category: 'mac', name: '55" Apple LCD TV', src: "apple1.png", description: 'Apple TV 4K makes your favorite TV shows and movies even more amazing. Videos play in stunning detail with picture quality that’s more true to life.Find what you want instantly with the Apple TV Remote.You can even share photos you take with your iPhone on the big screen.  ', price: 5.99, cal: 10 },
          { num: 2, code: 'AVC', category: 'ipad', name: 'Apple iPad', src: "apple2.png", description: 'iPad is both fun and functional - thanks to an immersive 10.2-inch Retina display, support for the Smart Keyboard and Apple Pencil, front and back cameras, all-day battery life and iPadOS. Over a million apps on the App Store for productivity and games, including Apple Arcade. This is where work meets creativity meets play. ', price: 11, cal: 10 },
          { num: 3, code: 'BAN', category: 'phone', name: 'MacBookPro', src: "apple6.png", description: 'The phone comes with a 4.00-inch touchscreen display with a resolution of 640x1136 pixels at a pixel density of 326 pixels per inch (ppi). Apple iPhone 5c is powered by a 1.3GHz dual-core Apple A6 processor. It comes with 1GB of RAM. The Apple iPhone 5c runs iOS 7 and is powered by a 1507mAh non-removable battery. ', price: 6, cal: 10 },
          { num: 4, code: 'CTP', category: 'mac', name: 'MacBookPro', src: "apple4.png", description: 'Apple 13-inch MacBook Pro with Touch Bar 8th gen Core i5 512GB - Space Grey. 13.3 inch (diagonal) LED-backlit display with IPS technology; 2560 by 1600 native resolution at 227 pixels per inch with support for millions of colors ', price: 13, cal: 10 },
          { num: 5, code: 'FIG', category: 'ipad', name: 'MacBook Airs', src: "apple5.png", description: 'The incredibly thin and light MacBook Air is now more powerful than ever. It features a brilliant Retina display, new Magic Keyboard, Touch ID, processors with up to twice the performance,1 faster graphics and double the storage capacity. The sleek wedge-shaped design is created from 100 per cent recycled aluminium, making it the greenest Mac ever.2 And with all-day battery life, our most popular Mac is your perfectly portable, do-it-all notebook.', price: 750, cal: 10 },
          { num: 6, code: 'GRP', category: 'ipad', name: 'Front Office Manager', src: "apple7.png", description: 'Create, learn, work and play like never before on the immersive 10.2-inch Retina display. Support for the Smart Keyboard and Apple Pencil. Over a million apps available on the App Store, including Apple Arcade games. Front and back cameras. Wi-Fi and 4G LTE Advanced. All-day battery life. And it comes with iPadOS, which unlocks a whole new world of capability. It’s unbelievably fun. And unmistakably iPad.', price: 800, cal: 10 },
          { num: 7, code: 'GUA', category: 'mac', name: 'Interaction Designer', src: "apple3.png", description: 'Apple iMac measures at just 5mm at its edges, and its widescreen display features LED backlighting for vibrant and accurate support for millions of colors. With in-plane switching (IPS) technology, the iMac has a wide viewing angle.', price: 500, cal: 10 },
          { num: 8, code: 'KIW', category: 'mac', name: 'Marketing Manager', src: "apple4.png", description: 'Expand your view of everything on MacBook Pro thanks to a larger 16-inch Retina display with sharper pixel resolution and support for millions of colors. Harness the power of 8-core processors and AMD Radeon Pro 5500M with 4GB of GDDR6 memory, together with an optimized thermal architecture for groundbreaking performance. Featuring up to 16GB of 2666MHz memory and up to 1TB of storage. Touch ID and the Touch Bar. And all-day battery life. Designed for pros who put performance above all else, MacBook Pro gives you the power to accomplish anything, anywhere.', price: 167, cal: 10 },
          { num: 9, code: 'ORG', category: 'ipad', name: 'Account Manager', src: "apple2.png", description: 'The 11-inch iPad Pro features an immersive, edge-to-edge Liquid Retina display. The new pro cameras, Wide and new Ultra Wide, combined with the all-new LiDAR Scanner enable entirely new experiences in the next generation of augmented reality (AR) apps. A12Z Bionic chip for powering essential apps and graphics-intensive games. Support for the new Magic Keyboard with trackpad and Apple Pencil. Faster Wi-Fi and 4G LTE Advanced.', price: 210, cal: 10 },
          { num: 10, code: 'LSS', category: 'mac', name: '35" Apple LCD TV', src: "apple10.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 215, cal: 10 },
          { num: 11, code: 'LAA', category: 'phone', name: 'Apple xiPad', src: "apple11.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 115, cal: 10 },
          { num: 12, code: 'LBB', category: 'mac', name: 'MacBookxxPro', src: "apple12.png", description: 'MacBook Pro is here, with an updated processor and more ergonomic keyboard.With an immersive 16-inch Retina display, super-fast processors, next-generation graphics, the largest battery capacity ever in a MacBook Pro, a new Magic Keyboard and massive storage, it’s the ultimate pro notebook for the ultimate user. ', price: 645, cal: 10 },
          { num: 13, code: 'LCC', category: 'sound', name: 'MacBookPro', src: "apple13.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 130, cal: 10 },
          { num: 14, code: 'LDD', category: 'mac', name: 'MacBook Irs', src: "apple14.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 750, cal: 10 },
          { num: 15, code: 'LEE', category: 'sound', name: 'Front Office Manager', src: "apple15.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 120, cal: 10 },
          { num: 16, code: 'LFF', category: 'sound', name: 'Interaction Designer', src: "apple13.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 500, cal: 10 },
          { num: 17, code: 'LGG', category: 'sound', name: 'Marketing Manager', src: "apple13.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 167, cal: 10 },
          { num: 18, code: 'LHH', category: 'sound', name: 'Account Manager', src: "apple13.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 200, cal: 10}];
     
}

function detailsprod() {
    this.details = [
         { id: 'APL', src1: 'processor.png', component: 'Processor', processor: '2.9GHz Quad-core Intel Core i5, Turbo Boost up to 3.6GHz', src2: 'memory.png', component2: 'Memory', memory: '4GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'AVC', src1: 'processor.png', component: 'Processor', processor: '1.3GHz Dual-Core Intel Core i5, Turbo Boost up to 2.6GHz', src2: 'memory2.png', component2: 'Memory', memory: '2GB 1300MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '1TB Serial ATA Drive @ 5400 rpm' },
         { id: 'BAN', src1: 'processor.png', component: 'Processor', processor: '1.9GHz Quad-core Intel Core i5, Turbo Boost up to 5.3GHz', src2: 'memory.png', component2: 'Memory', memory: '8GB 1200MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'CTP', src1: 'processor.png', component: 'Processor', processor: '4GHz Quad-core Intel Core i2, Turbo Boost up to 1.6GHz', src2: 'memory.png', component2: 'Memory', memory: '1GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '128GB Solid State Drive' },
         { id: 'FIG', src1: 'processor.png', component: 'Processor', processor: '1GHz Dual-core Intel Core i3, Turbo Boost up to 3.5GHz', src2: 'memory2.png', component2: 'Memory', memory: '2GB 1200MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '50GB Serial ATA Drive @ 5400 rpm' },
         { id: 'GRP', src1: 'processor.png', component: 'Processor', processor: '1GHz Quad-core Intel Core i8, Turbo Boost up to 2.1GHz', src2: 'memory.png', component2: 'Memory', memory: '5GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '256GB Solid State Drive' },
         { id: 'GUA', src1: 'processor.png', component: 'Processor', processor: '3GHz Quad-core Intel Core i3, Turbo Boost up to 3.4GHz', src2: 'memory.png', component2: 'Memory', memory: '8GB 1300MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '256GB Solid State Drive' },
         { id: 'KIW', src1: 'processor.png', component: 'Processor', processor: '5GHz Quad-core Intel Core i6, Turbo Boost up to 2.3GHz', src2: 'memory.png', component2: 'Memory', memory: '3GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '50GB Serial ATA Drive @ 5400 rpm' },
         { id: 'ORG', src1: 'processor.png', component: 'Processor', processor: '4GHz Quad-core Intel Core i9, Turbo Boost up to 1.6GHz', src2: 'memory.png', component2: 'Memory', memory: '4GB 1700MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LSS', src1: 'processor.png', component: 'Processor', processor: '2.9GHz Quad-core Intel Core i5, Turbo Boost up to 3.6GHz', src2: 'memory.png', component2: 'Memory', memory: '4GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LAA', src1: 'processor.png', component: 'Processor', processor: '1.3GHz Dual-Core Intel Core i5, Turbo Boost up to 2.6GHz', src2: 'memory2.png', component2: 'Memory', memory: '2GB 1300MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '1TB Serial ATA Drive @ 5400 rpm' },
         { id: 'LBB', src1: 'processor.png', component: 'Processor', processor: '1.9GHz Quad-core Intel Core i5, Turbo Boost up to 5.3GHz', src2: 'memory.png', component2: 'Memory', memory: '8GB 1200MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LCC', src1: 'processor.png', component: 'Processor', processor: '4GHz Quad-core Intel Core i2, Turbo Boost up to 1.6GHz', src2: 'memory.png', component2: 'Memory', memory: '1GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '128GB Solid State Drive' },
         { id: 'LDD', src1: 'processor.png', component: 'Processor', processor: '1GHz Dual-core Intel Core i3, Turbo Boost up to 3.5GHz', src2: 'memory2.png', component2: 'Memory', memory: '2GB 1200MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '50GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LEE', src1: 'processor.png', component: 'Processor', processor: '1GHz Quad-core Intel Core i8, Turbo Boost up to 2.1GHz', src2: 'memory.png', component2: 'Memory', memory: '5GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '256GB Solid State Drive' },
         { id: 'LFF', src1: 'processor.png', component: 'Processor', processor: '3GHz Quad-core Intel Core i3, Turbo Boost up to 3.4GHz', src2: 'memory.png', component2: 'Memory', memory: '8GB 1300MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '256GB Solid State Drive' },
         { id: 'LGG', src1: 'processor.png', component: 'Processor', processor: '5GHz Quad-core Intel Core i6, Turbo Boost up to 2.3GHz', src2: 'memory.png', component2: 'Memory', memory: '3GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '50GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LHH', src1: 'processor.png', component: 'Processor', processor: '4GHz Quad-core Intel Core i9, Turbo Boost up to 1.6GHz', src2: 'memory.png', component2: 'Memory', memory: '4GB 1700MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm'}];

}


store.prototype.getProduct = function (code) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].code == code)
            return this.products[i];
    }
    
    return null;
}
detailsprod.prototype.getDetail = function (code) {
    for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].id == code)
            
            return this.details[i];
        
    }
    return null;
}
