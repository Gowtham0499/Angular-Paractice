(function(){
    angular.module('common')
        .service('SignUpService', SignUpService);

    function SignUpService() {
        var service = this;

        service.users_signed_up = [];

        service.putSignedUser = function(user) {
            service.users_signed_up.push(user);
        };

        service.getSignedUsers = function() {
            return service.users_signed_up;
        };
        
    }
})();