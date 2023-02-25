module ApplicationHelper
  def checkActiveTabs paths
    paths.include?(request.fullpath)
  end
end
