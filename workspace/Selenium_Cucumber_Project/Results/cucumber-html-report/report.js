$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SP-232_MLB Advanced Search-Players.feature");
formatter.feature({
  "line": 1,
  "name": "SP-232_MLB Advanced Search- Players",
  "description": "",
  "id": "sp-232-mlb-advanced-search--players",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Remove all references to 1032 IDs from MLB Advanced Searches- Players",
  "description": "",
  "id": "sp-232-mlb-advanced-search--players;remove-all-references-to-1032-ids-from-mlb-advanced-searches--players",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Start Statspass application and login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the MLB module is open",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "advanced search window is opened",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Player statistics can be selected",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Player splits can be selected",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Player participant types can be selected",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "All time spans can be selected",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Custom filters can be selected",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the correct players displayed when link is clicked",
  "keyword": "Then "
});
formatter.match({
  "location": "spassMLB_TestDefinitions.start_Statspass_application_and_login()"
});
formatter.result({
  "duration": 5026041463,
  "status": "passed"
});
formatter.match({
  "location": "spassMLB_TestDefinitions.the_MLB_module_is_open()"
});
formatter.result({
  "duration": 241397072,
  "status": "passed"
});
formatter.match({
  "location": "spassMLB_TestDefinitions.advanced_search_window_is_opened()"
});
formatter.result({
  "duration": 417067824,
  "status": "passed"
});
formatter.match({
  "location": "spassMLB_TestDefinitions.Player_statistics_can_be_selected()"
});
formatter.result({
  "duration": 4174530622,
  "status": "passed"
});
formatter.match({
  "location": "spassMLB_TestDefinitions.Player_splits_can_be_selected()"
});
formatter.result({
  "duration": 3950527667,
  "status": "passed"
});
formatter.match({
  "location": "spassMLB_TestDefinitions.Player_participant_types_can_be_selected()"
});
formatter.result({
  "duration": 54841,
  "status": "passed"
});
formatter.match({
  "location": "spassMLB_TestDefinitions.all_time_spans_can_be_selected()"
});
formatter.result({
  "duration": 27581,
  "status": "passed"
});
formatter.match({
  "location": "spassMLB_TestDefinitions.custom_filters_can_be_selected()"
});
formatter.result({
  "duration": 27581,
  "status": "passed"
});
formatter.match({
  "location": "spassMLB_TestDefinitions.the_correct_players_displayed_when_link_is_clicked()"
});
formatter.result({
  "duration": 21167,
  "status": "passed"
});
});