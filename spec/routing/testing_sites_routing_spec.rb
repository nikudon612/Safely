require "rails_helper"

RSpec.describe TestingSitesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/testing_sites").to route_to("testing_sites#index")
    end

    it "routes to #show" do
      expect(get: "/testing_sites/1").to route_to("testing_sites#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/testing_sites").to route_to("testing_sites#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/testing_sites/1").to route_to("testing_sites#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/testing_sites/1").to route_to("testing_sites#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/testing_sites/1").to route_to("testing_sites#destroy", id: "1")
    end
  end
end
