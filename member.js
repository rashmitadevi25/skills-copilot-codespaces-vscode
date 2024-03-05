function skillsMember(){
    return{
        restrict:'E',
        templateUrl:'modules/skills/views/member.html',
        Controller: 'SkillsMemberController',
        ControllerAs: 'vm',
        bindToController: true,
        scope:{
            member:'='
        }
    };
}