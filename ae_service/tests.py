import unittest
from app.model import ae_model

class TestAEModel(unittest.TestCase):
    def setUp(self):
        
        self.text = (
            "A 26-year-old Japanese woman, who had been receiving medical attention for ulcerative colitis for one year, "
            "presented with diffuse erythema and pustules on his face and trunk, malaise, and fever up to 39 degrees C one day "
            "after the administration of salazosulfapyridine."
        )
    
    def test_inference(self):
        
        result = ae_model.inference(self.text)
      
        self.assertIsInstance(result, dict)  
        self.assertIn('drugs', result)      
        
        
if __name__ == '__main__':
    unittest.main()
