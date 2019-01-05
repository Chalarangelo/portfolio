workflow "Build docs" {
  on = "push"
  resolves = ["npm build"]
}

action "npm build" {
  uses = "actions/npm@e7aaefe"
  runs = "build"
}
