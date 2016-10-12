app.controller("MainController", ["$scope", '$http', 'NavbarService', 'ApiService', function ($scope, $http, navbar, api) {
    navbar.hide();

    $scope.webs = [
        { name: "Router OpenWRT", url: 'http://10.0.0.1/', proxy: true, proxyUrl: "http://10.0.0.1", favicon: null },
        { name: "Google", url: 'https://google.es/', proxy: false, favicon: null }
    ];

    for (var index in $scope.webs) {
        $http.get($scope.webs[index].url + 'favicon.ico', {responseType: 'arraybuffer'}).then((res) => {
            let blob = new Blob([res.data], {type: 'image/x-icon'});
            $scope.webs[index].favicon = (window.URL || window.webkitURL).createObjectURL(blob);
        });
    }

    $scope.services = [
        { name: "eMule", icon: "images/services/emule/icon.svg", background: "images/services/emule/bg.png", online: true },
        { name: "Deluge", icon: "images/services/deluge/icon.svg", services: [{ type: "web", name: "Manager", value: "#"}] },
        { name: "VMware", icon: "images/services/vmware/icon.png", background: "images/services/vmware/bg.png" },
        { name: "MySQL", icon: "images/services/mysql/icon.svg", background: "images/services/mysql/bg.svg", services: [{ type: "port", name: "Puerto", value: "3306"}] },
    ];

    console.log("Controlador principal");
}]);
