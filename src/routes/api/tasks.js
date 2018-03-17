export default function taskRoutes(options = {}) {
  create: '/tasks/create',
  show: `/tasks/${options.taskID}`,
  destroy: `/tasks/${options.taskID}`,
  update: `/tasks/${options.taskID}`,
  index: `/tasks`

}
