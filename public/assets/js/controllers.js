app.controller('modalOneCtrl', function ($scope,$uibModal) {
  $scope.animationsEnabled=true;
  $scope.open=function (size) {
    var modalInstance = $uibModal.open({
      animation:$scope.animationsEnabled,
      templateUrl: 'modalOneTemplate.html',
      controller: 'modalOneInstanceCtrl',
      size: size
    });
  }
});

app.controller('modalOneInstanceCtrl',function($scope,$uibModalInstance,$state) {
  $scope.ok=function() {
    $uibModalInstance.close();
  }
  $scope.datepicker=function() {
    $state.go('datepicker');
    $uibModalInstance.close();
  }
  $scope.modals=function() {
    $state.go('modals');
    $uibModalInstance.close();
  }
  $scope.misc=function() {
    $state.go('misc');
    $uibModalInstance.close();
  }
  $scope.filters=function() {
    $state.go('filters');
    $uibModalInstance.close();
  }
});

app.controller('modalTwoCtrl', function ($scope,$uibModal) {
  $scope.animationsEnabled=true;
  $scope.open=function (size) {
    var modalInstance = $uibModal.open({
      animation:$scope.animationsEnabled,
      templateUrl: 'buyTokensModal.html',
      controller: 'modalTwoInstanceCtrl',
      size: size
    });
  }
});

app.controller('modalTwoInstanceCtrl',function($scope,$modalInstance, $uibModal) {
  $scope.ok=function(size) {
    var modalInstance =$uibModal.open({
      animation:$scope.animationsEnabled,
      templateUrl: 'cartModal.html',
      controller: 'cartModalInstanceCtrl',
      size:size
    });
    $modalInstance.close();
  }
});
app.controller('cartModalCtrl', function ($scope,$uibModal) {
  $scope.animationsEnabled=true;
  $scope.open=function (size) {
    var modalInstance = $uibModal.open({
      animation:$scope.animationsEnabled,
      templateUrl: 'cartModal.html',
      controller: 'cartModalInstanceCtrl',
      size: size
    });
  }
});

app.controller('cartModalInstanceCtrl',function($scope,$modalInstance,$uibModal) {
  $scope.shop=function(size) {
    var modalInstance =$uibModal.open({
      animation:$scope.animationsEnabled,
      templateUrl: 'buyTokensModal.html',
      controller: 'modalTwoInstanceCtrl',
      size:size
    });
    $modalInstance.close();
  }
  $scope.ok=function() {
    $modalInstance.close();
  }
});
app.controller('modalThreeCtrl', function ($scope,$uibModal) {
  $scope.animationsEnabled=true;
  $scope.open=function (size) {
    var modalInstance = $uibModal.open({
      animation:$scope.animationsEnabled,
      templateUrl: 'pictureModal.html',
      controller: 'pictureModalInstanceCtrl',
      size: size
    });
  }
});

app.controller('pictureModalInstanceCtrl',function($scope,$modalInstance) {
  $scope.ok=function() {
    $modalInstance.close();
  }
});

app.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = -1;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//placekitten.com/' + newWidth + '/300',
      text: 'Featured Model' 
    });
  };
  for (var i=0; i<7; i++) {
    $scope.addSlide();
  }
});

app.controller('tabsCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Dropdown Menu', content:'assets/partials/tab1.html' },
    { title:'Accordion', content:'assets/partials/tab2.html'},
    { title:'Tooltips', content:'assets/partials/tab3.html'}
  ];

  $scope.alert = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
});
app.controller('accordionCtrl', function ($scope) {
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];
  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
});
app.controller('filterCtrl',function($scope, $http) {
  $scope.myData = [];
  $scope.myData.doClick = function(item, event) {
    var responsePromise = $http.get("friends.php");
    responsePromise.success(function(data, status, headers, config) {
      $scope.myData = angular.fromJson(data);
    });
  }
});
