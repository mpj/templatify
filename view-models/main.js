require([
  'vendor/spotify-knockout/api-wrappers/observable-collection#observableCollection',
  'vendor/spotify-knockout/common/sp-computed#spComputed',
  '$api/models' ],
function(observableCollection, spComputed, models) {


  function fetchingProperty(fetcher, initialValue) {
    var cache = ko.observable(initialValue);
    ko.computed(function() {
      fetcher(cache);
    });
    return cache;
  }

  var MainViewModel = function() {

    var self = this;

    self.playlists = observableCollection(Library.forCurrentUser().playlists);





  }

  MainViewModel.prototype = {

  }

  exports.MainViewModel = MainViewModel;

})